import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ApiRequest} from "../shared/sails/api_request";
import {Firm} from "../shared/oss/firm";
import {environment} from "../../environments/environment";
import {RequestHandler} from "../shared/sails/request.handler";
import {Observable} from "rxjs";
import {HttpService} from "../shared/sails/http.service";
import {SailsClientService} from "../shared/sails/sails-client.service";

@Component({
  selector: 'app-oss-detail-view',
  templateUrl: './oss-detail-view.component.html',
  styleUrls: ['./oss-detail-view.component.scss']
})
export class OssDetailViewComponent implements OnInit {

  private reqHandler : RequestHandler;

  protected firms : Firm[];
  protected firm : Firm = new Firm();
  protected customers;

  constructor(
    private httpService : HttpService,
    private route: ActivatedRoute) {
    this.reqHandler = new RequestHandler(httpService);
  }

  ngOnInit() {
    const id = +this.route.snapshot.params["id"];

    let firm_req = new ApiRequest(new Firm());
    this.reqHandler.read(firm_req, this.firms).subscribe(data => {
      this.firm = data.find( firm => firm.id === id);
      this.customers = this.firm.customers;
    });
  }
}
