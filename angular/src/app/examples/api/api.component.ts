import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../shared/sails/http.service';
import { RequestHandler } from '../../shared/sails/request.handler';
import { Observable } from 'rxjs';
import { Firm } from '../../shared/oss/firm';
import { Customer } from '../../shared/oss/customer';
import { Product } from '../../shared/oss/product';
import { Reference } from '../../shared/oss/reference';
import { Table } from '../../shared/oss/table';
import { ApiRequest } from '../../shared/sails/api_request';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss'],
})
export class ApiComponent implements OnInit {

  private reqHandler : RequestHandler;

  private firms_obs : Observable<Firm[]>;
  private firms : Firm[] = [];
  private new_firm : Firm = new Firm();
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
    this.firms_obs = this.reqHandler.read(this.firm_req).pipe(
      map((data) => {
        this.firms = [];
        let d = data.map((item) => {
          let f = new Firm().deserialize(item);
          this.firms.push(f);
          return f;
        });
        this.edit_firm = this.firms.pop();
        this.firms.push(this.edit_firm);
        return d;

    }));
    this.firms_obs.subscribe();
  }

  refreshData() {
    //resubsribe to send the request again
    this.firms_obs.subscribe();
  }



  search(entry : Table) : void {
    let req = new ApiRequest(this.search_firm);
    let observable = this.reqHandler.read(req).pipe(
      map((data) => {
        this.search_results = [];
        let d = data.map((item) => {
          let f = new Firm().deserialize(item);
          this.search_results.push(f);
        });
    }));
    observable.subscribe();
  }

  create(entry : Firm) : void {
    let req = new ApiRequest(this.new_firm);
    let observable = this.reqHandler.create(req);
    observable.subscribe((res) => {this.refreshData()});
  }
  
  update() : void {
    let req = new ApiRequest(this.edit_firm);
    let observable = this.reqHandler.update(req);
    observable.subscribe((res) => {this.refreshData()});
  }

  delete(entry : Firm) : void {
    let req = new ApiRequest(entry);
    let observable = this.reqHandler.delete(req);
    observable.subscribe((res) => {this.refreshData()});
  }
}
