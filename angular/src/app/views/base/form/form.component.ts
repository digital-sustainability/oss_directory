import { Component, OnInit } from '@angular/core';
import { DataProviderService } from '../../../shared/data/data-provider.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiData } from '../../../shared/data/api-data';
import { map, switchMap, share } from 'rxjs/operators';
import { ApiDataProxy } from '../../../shared/data/api-data-proxy';
import { HttpService } from '../../../shared/sails/http.service';
import { ApiUrl } from '../../../shared/url/api-url';
import { of, Observable } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  public type : string;
  private data : ApiData;

  private proxy : ApiDataProxy;

  constructor(
    private router : Router,
    private route : ActivatedRoute, 
    private provider : DataProviderService,
    private http : HttpService,
    private url : ApiUrl) { 
      this.proxy = new ApiDataProxy(http, url);
    }

    //maybe create two forms : one for new entries and one for editing?
    //later for different behavior and views

  ngOnInit() {

    //if an id is given requests the item based on type and id
    //if there is no id returns a new ApiData Object based on the type

    this.setup();
  }

  setup() {
    
    let obs = this.route.params.pipe(
      map( (params) => {
        let data = this.provider.resolveParams(params);
        this.type = data.getName();
        return data;
      }),
      switchMap( data => {
        if (data.getIdentifier()){
          return this.proxy.read(data);
        } else {
          return of(data);
        }
      })
    );
    obs.subscribe(res => this.data = res);
  }

  private submit(){

    //update url maybe on change
  }
}
