import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ApiRequest} from "../shared/sails/api_request";
import {Firm} from "../shared/oss/firm";
import {environment} from "../../environments/environment";
import {RequestHandler} from "../shared/sails/request.handler";
import {Observable} from "rxjs";
import {HttpService} from "../shared/sails/http.service";

@Component({
  selector: 'app-oss-detail-view',
  templateUrl: './oss-detail-view.component.html',
  styleUrls: ['./oss-detail-view.component.scss']
})
export class OssDetailViewComponent implements OnInit {

  private reqHandler : RequestHandler;

  private firms_obs : Observable<Firm[]>;
  protected firm : Firm;
  private edit_firm : Firm = new Firm();
  private search_firm : Firm = new Firm();
  private search_results : Firm[] = [];
  private firm_req = new ApiRequest(new Firm());

  constructor(
    private httpService : HttpService,
    private route: ActivatedRoute) {
    this.reqHandler = new RequestHandler(httpService);
  }

  ngOnInit() {
    const id = +this.route.snapshot.params["id"];


  }

}
