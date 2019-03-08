import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Vendor } from '../../../shared/model/vendor';
import { Organisation, OrganisationTranslation } from '../../../shared/model/organisation';
import { ApiData } from '../../../shared/data/api-data';
import { Observable } from 'rxjs';
import { HttpService } from '../../../shared/sails/http.service';

@Component({
  selector: 'app-vendor-form',
  templateUrl: './vendor-form.component.html',
  styleUrls: ['./vendor-form.component.scss']
})
export class VendorFormComponent implements OnInit {

  public vendor : Vendor;
  private organisation : Organisation;
  private translations : OrganisationTranslation[] = [];

  private proxy ; ApiDataProxy;

  @Input() data : Observable<ApiData>;

  @Output() _submit : EventEmitter<ApiData> = new EventEmitter();
  constructor(private http : HttpService) {}

  ngOnInit() {
    this.data.subscribe(res => {
      this.vendor = res as Vendor;
      //translations as well
    });
  }

  private submit(entry : ApiData) {
  }

}
