import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../shared/sails/http.service';
import { RequestHandler } from '../../shared/sails/request/request.handler';
import { Observable } from 'rxjs';
import { Firm } from '../../shared/oss/firm';
import { Customer } from '../../shared/oss/customer';
import { Product } from '../../shared/oss/product';
import { Reference } from '../../shared/oss/reference';
import { Table } from '../../shared/oss/table';
import { Request } from '../../shared/sails/request/request';
import { map } from 'rxjs/operators';
import { TableHelper } from '../../shared/oss/table.helper';

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

  private products_obs : Observable<Product[]>;
  private products : Product[] = [];

  constructor(private httpService : HttpService, ) {
    //define your type of request handler 
    //right now we only support http requests
    this.reqHandler = new RequestHandler(httpService);
  }

  ngOnInit() {
    let firm_req = new Request(new Firm());
    this.firms_obs = this.reqHandler.read(firm_req);

    let product_req = new Request(new Product());
    this.products_obs = this.reqHandler.read(product_req);

    this.firms_obs.subscribe( data => {
      this.firms = data;
    });
    this.products_obs.subscribe();
  }

  refreshData() {
    //resubsribe to send the request again
    this.firms_obs.subscribe();
  }

  search() : void {
    let req = new Request(this.search_firm);
    this.firms_obs = this.reqHandler.read(req);
    this.refreshData();
  }

  create(entry : Firm) : void {
    let req = new Request(this.new_firm);
    let observable = this.reqHandler.create(req);
    observable.subscribe((res) => {this.refreshData(); this.new_firm = new Firm();});
  }
  
  update() : void {
    let req = new Request(this.edit_firm);
    let observable = this.reqHandler.update(req);
    observable.subscribe((res) => {this.refreshData()});
  }

  delete(entry : Firm) : void {
    let req = new Request(entry);
    let observable = this.reqHandler.delete(req);
    observable.subscribe((res) => {this.refreshData()});
  }
}
