import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormArray, FormControl} from '@angular/forms';
import {MatStepperModule} from '@angular/material';
import {Firm} from "../shared/oss/firm";
import {ApiRequest} from "../shared/sails/api_request";
import {RequestHandler} from "../shared/sails/request.handler";
import {HttpService} from "../shared/sails/http.service";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-oss-change-entry',
  templateUrl: './oss-change-entry.component.html',
  styleUrls: ['./oss-change-entry.component.scss']
})
export class OssChangeEntryComponent implements OnInit {

  private reqHandler : RequestHandler;

  protected new_firm : Firm = new Firm();
  items: FormArray;
  form: FormGroup;
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  private firms_obs : Observable<Firm[]>;
  private firms : Firm[] = [];
  private edit_firm : Firm = new Firm();
  private firm_req = new ApiRequest(new Firm());

  constructor(
    private _formBuilder: FormBuilder,
    private httpService : HttpService,
    private route: ActivatedRoute,
  ) {
    this.reqHandler = new RequestHandler(httpService)
  }

  ngOnInit() {

    this.firstFormGroup = this._formBuilder.group({
      title:  [this.new_firm.title, Validators.required],
      url: [this.new_firm.url, [Validators.required]],
    });
    this.secondFormGroup = this._formBuilder.group({
      name: [this.new_firm.contact_name, Validators.required],
      email: [this.new_firm.contact_email, Validators.email],
      address: [this.new_firm.address, Validators.required],
      address2: [this.new_firm.address2],
      zip: [this.new_firm.zip, Validators.required],
      city: [this.new_firm.city, Validators.required],
      phone: [this.new_firm.contact_phone]});

    this.getFirm();

  }

  refreshData() {
    //resubsribe to send the request again
    //this.firms_obs.subscribe();
  }

  create(entry : Firm) : void {
    this.new_firm.title = this.firstFormGroup.controls.title.value;
    this.new_firm.url = this.firstFormGroup.controls.url.value;
    this.new_firm.contact_name = this.secondFormGroup.controls.name.value;
    this.new_firm.contact_email = this.secondFormGroup.controls.email.value;
    this.new_firm.contact_phone = this.secondFormGroup.controls.phone.value;
    this.new_firm.address = this.secondFormGroup.controls.address.value;
    this.new_firm.address2 = this.secondFormGroup.controls.address2.value;
    this.new_firm.zip = this.secondFormGroup.controls.zip.value;
    this.new_firm.city = this.secondFormGroup.controls.city.value;

    console.log(this.new_firm);
    let req = new ApiRequest(this.new_firm);
    let observable = this.reqHandler.create(req);
    observable.subscribe((res) => {});
  }

  getFirm(): void {
    this.firms_obs = this.reqHandler.read(this.firm_req).pipe(
      map((data) => {
        this.firms = [];
        let d = data.map((item) => {
          let f = new Firm().deserialize(item);
          this.firms.push(f);
          return f;
        });
        return d;

      }));
    this.firms_obs.subscribe();
    this.new_firm = this.firms.find(item => item.title === this.route.snapshot.paramMap.get('id').toString());
    console.log(this.new_firm);

  }

  /*getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    new ApiRequest(this.new_firm);
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }*/


}

