import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { HttpService } from '../../shared/sails/http.service';
import { RequestHandler } from '../../shared/sails/request.handler';
import { Observable, Subject } from 'rxjs';
import { Firm } from '../../shared/oss/firm';
import { Customer } from '../../shared/oss/customer';
import { Product } from '../../shared/oss/product';
import { Reference } from '../../shared/oss/reference';
import { Table, TABLES } from '../../shared/oss/table';
import { ApiRequest } from '../../shared/sails/api_request';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss'],
})
export class ApiComponent implements OnInit {

  private reqHandler : RequestHandler;


  private firms$ : Observable<Firm[]>;
  private selected_firm : Firm = new Firm();
  private firm_req = new ApiRequest(new Firm());

  private customers$ : Observable<Customer[]>;
  private selected_customer : Observable<Customer>;
  private customer_req = new ApiRequest(new Customer());

  private products$ : Observable<Product[]>;
  private selected_product : Observable<Product>;
  private product_req = new ApiRequest(new Product());

  private references$ : Observable<Reference[]>;
  private selected_reference : Observable<Reference>;
  private reference_req = new ApiRequest(new Reference());

  constructor(private httpService : HttpService, ) {


    //define your type of request handler 
    //right now we only support http requests
    this.reqHandler = new RequestHandler(httpService);
  }

  ngOnInit() {

    let test = new Firm();
    test.address = "allala";
    new ApiRequest(test);


   
    this.customers$ = this.reqHandler.read(this.customer_req).pipe(
      map((data) => {
        return data.map((item) => {
          return new Customer().deserialize(item);
        });
    }));

    this.products$ = this.reqHandler.read(this.product_req).pipe(
      map((data) => {
        return data.map((item) => {
          return new Product().deserialize(item);
        });
    }));
    this.references$ = this.reqHandler.read(this.reference_req).pipe(
      map((data) => {
        return data.map((item) => {
          return new Reference().deserialize(item);
        });
    }));
    this.refreshData();
  }

  refreshData() {
    this.firms$ = this.reqHandler.read(this.firm_req).pipe(
      map((data) => {
        return data.map((item) => {
          return new Firm().deserialize(item);
        });
    }));
  }

  create(entry : Table) : void {
    this.reqHandler.create(new ApiRequest(entry)).subscribe((res) => {this.refreshData()});
  }
  
  update(entry : Table) : void {
    this.reqHandler.update(new ApiRequest(entry)).subscribe((res) => {this.refreshData()});
  }

  delete(entry : Table) : void {
    this.reqHandler.delete(new ApiRequest(entry)).subscribe(res => this.refreshData());
  }
}
