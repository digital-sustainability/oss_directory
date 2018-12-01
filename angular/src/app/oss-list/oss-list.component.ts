import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {RequestHandler} from "../shared/sails/request.handler";
import {Observable} from "rxjs";
import {Firm} from "../shared/oss/firm";
import {ApiRequest} from "../shared/sails/api_request";
import {HttpService} from "../shared/sails/http.service";
import {map} from "rxjs/operators";
import {Table} from "../shared/oss/table";

@Component({
  selector: 'app-oss-list',
  templateUrl: './oss-list.component.html',
  styleUrls: ['./oss-list.component.scss']
})
export class OssListComponent implements OnInit {

  @Output() selectListItem = new EventEmitter();

  private reqHandler : RequestHandler;

  private firms_obs : Observable<Firm[]>;
  protected firms : Firm[] = [];
  private edit_firm : Firm = new Firm();
  private search_firm : Firm = new Firm();
  private search_results : Firm[] = [];
  private firm_req = new ApiRequest(new Firm());

  constructor(private httpService : HttpService, ) {
    //define your type of request handler
    //right now we only support http requests
    this.reqHandler = new RequestHandler(httpService);
  }

  ngOnInit() {
    let firm_req = new ApiRequest(new Firm());
    this.firms_obs = this.reqHandler.read(firm_req, this.firms);
    this.firms_obs.subscribe();
  }

  search(entry : Table) : void {
    let req = new ApiRequest(this.search_firm);
    this.firms_obs = this.reqHandler.read(req, this.firms);
    this.refreshData();
  }

  refreshData() {
    //resubsribe to send the request again
    this.firms_obs.subscribe();
  }

  selectItem(item) {
    this.selectListItem.emit(item);
  }
}
