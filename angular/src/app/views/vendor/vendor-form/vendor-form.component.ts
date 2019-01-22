import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Vendor } from '../../../shared/model/vendor';
import { Organisation, Translation } from '../../../shared/model/organisation';
import { ApiData } from '../../../shared/data/api-data';
import { Observable } from 'rxjs';
import { ApiDataProxy } from '../../../shared/data/api-data-proxy';
import { HttpService } from '../../../shared/sails/http.service';
import { ApiUrl } from '../../../shared/url/api-url';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-vendor-form',
  templateUrl: './vendor-form.component.html',
  styleUrls: ['./vendor-form.component.scss']
})
export class VendorFormComponent implements OnInit {

  private vendor : Vendor;
  private organisation : Organisation;
  private translations : Translation[] = [];

  private proxy ; ApiDataProxy;

  @Input() data : Observable<ApiData>;

  @Output() _submit : EventEmitter<ApiData> = new EventEmitter();
  constructor(private http : HttpService, private url : ApiUrl) { 

    this.proxy = new ApiDataProxy(this.http, this.url);
  }

  ngOnInit() {
    this.data.subscribe(res => {
      this.vendor = res as Vendor;
      this.organisation = this.vendor.organisation;
      //translations as well
    });
  }

  private submit(entry : ApiData) {
  }

}
