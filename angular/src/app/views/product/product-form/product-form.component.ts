import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ApiData } from '../../../shared/data/api-data';
import { Category } from '../../../shared/model/category';
import { ApiDataProxy } from '../../../shared/data/api-data-proxy';
import { HttpService } from '../../../shared/sails/http.service';
import { ApiUrl } from '../../../shared/url/api-url';
import { Language } from '../../../shared/model/language';
import { ProductTranslation, Product } from '../../../shared/model/product';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})

/**
 * Product Form Component is responsible for creating or editing a certain product entry
 * The user has to go different steps
 * 
 * Comming soon:
 * After each step validity will be checked and an update 
 * will be performed to ensure the user does not loose any progress
 */
export class ProductFormComponent implements OnInit {

  private categories : Category[];
  private languages : Language[] = [];
  private language_opts : Language[] = [];

  private product : Product;
  private translations : ProductTranslation[] = []

  //Will be converted into a service later on
  private proxy : ApiDataProxy;

  //This is the data input provided by the parent base component (FormComponent) with [data]='data'
  //Every time the parent sets the value the set function will be called
  //Because of the async function we should check if the parent does rly provide any data
  @Input() set data(data : ApiData) {
    if(data) this.setup(data); //only if the data is defined
  }

  @Output() _submit : EventEmitter<ApiData> = new EventEmitter(); //not used right now (we could call parent class this way)

  constructor(
    private http : HttpService, 
    private url : ApiUrl) {
      this.proxy = new ApiDataProxy(http, url); //setup proxy (later on just a service)
    }

  ngOnInit() {

    //request lists of category and language

    let category = new Category();
    this.proxy.read(category).subscribe(
      res => this.categories = res);

    let language = new Language();
    let lang_obs = this.proxy.read(language);
    lang_obs.subscribe(langs => {
      this.languages = langs
      this.findLangOpts(); //does not work if data is not defined yet
    });
  }

  private setup(data : ApiData) {
    this.product = data as Product;
    this.translations = this.product.translations;
    this.findLangOpts(); //does not work if languages are not back yet
  }

  //create a list of language options for which no translation exists yet
  private findLangOpts() {
    if (!this.product) return; //we have to wait until product arrives
    for(let lang of this.languages){
      let language_translation_exists = this.translations.find(
        trans => trans.language == lang.id);
      if (!language_translation_exists) this.language_opts.push(lang);
    }
  }

  //used in html such that we can display translation first and optional later
  private langNameById(lang_id : number) : string {
    let lang = this.languages.find(lang => lang.id == lang_id);
    return lang.name;
  }

  private addTranslation(lang : Language){
    let index = this.language_opts.indexOf(lang);

    //what happens if language not found?
    if (index == -1){
      return;
    }
    this.language_opts.splice(index,1); //remove from options

    let new_translation = new ProductTranslation();
    new_translation.language = lang.id;

    this.translations.push(new_translation); //add to view
    //add to db
    //add relationship to product

  }

  //make sure to create in the right order (sails will explain it if done wrong ;) 
  private send() {
    let product_obs = this.createOrUpdate(this.product);

    product_obs.subscribe(res => {
      for(let trans of this.translations){
        console.log(trans);
        trans.product = res.id; //to make sure we can add the translation to a product

        let trans_obs = this.createOrUpdate(trans);
        trans_obs.subscribe();
      }
    });
  }

  //place this in a proxy service later on
  private createOrUpdate(data : ApiData) : Observable<ApiData>{
    let obs;
    if (data.id){
      console.log("Update: " + data.getName() + "_" + data.getIdentifier());
      obs = this.proxy.update(data);
    } else {
      console.log("Create: " + data.getName() + "_" + data.getIdentifier());
      obs = this.proxy.create(data);
    }
    return obs;
  }

  //this is used for the preview
  //product does now have a translation attribute as well as a list of translations
  //like that we can always directly access the translation attribute inside html (translation.description instead of translations[0].description)
  //and then we can change the translation if available
  tabChanged($event) {
    this.product.changeTranslation(this.translations[$event.index]);
  }

  //not used right know
  //would call parent component
  private submit() {
    this._submit.emit();
  }


}
