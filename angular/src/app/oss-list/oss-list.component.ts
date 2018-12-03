import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RequestHandler} from "../shared/sails/request.handler";
import {Observable} from "rxjs";
import {Firm} from "../shared/oss/firm";
import {ApiRequest} from "../shared/sails/api_request";
import {HttpService} from "../shared/sails/http.service";
import {map} from "rxjs/operators";
import {Table, TableWrapper} from "../shared/oss/table";
import {Product} from "../shared/oss/product";

@Component({
  selector: 'app-oss-list',
  templateUrl: './oss-list.component.html',
  styleUrls: ['./oss-list.component.scss']
})
export class OssListComponent implements OnInit {

  @Input() data: any[];

  private reqHandler : RequestHandler;

  private data_obs : Observable<Firm[]>;

  protected search_data : Firm = new Firm();

  constructor(private httpService : HttpService, ) {
    //define your type of request handler
    //right now we only support http requests
    this.reqHandler = new RequestHandler(httpService);
  }

  ngOnInit() {
  }

  refreshData() {
    //resubsribe to send the request again
    this.data_obs.subscribe();
  }

  keyDownFunction(event) {
    if(event.keyCode == 13) {
      this.search();
    }
  }

  search() : void {
    let req = new ApiRequest(this.search_data);
    this.data_obs = this.reqHandler.read(req, this.data);
    this.refreshData();
  }
}
