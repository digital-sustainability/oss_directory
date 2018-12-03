import { Component, OnInit } from '@angular/core';
import {RequestHandler} from "../shared/sails/request/request.handler";
import {Observable} from "rxjs";
import {Firm} from "../shared/oss/firm";
import {Product} from "../shared/oss/product";
import {HttpService} from "../shared/sails/http.service";
import {Request} from "../shared/sails/request/request";


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  private reqHandler : RequestHandler;

  private products_obs : Observable<Product[]>;
  protected products : Product[] = [];

  constructor(private httpService : HttpService, ) {
    //define your type of request handler
    //right now we only support http requests
    this.reqHandler = new RequestHandler(httpService);
  }

  ngOnInit() {
    let product_req = new Request(new Product());
    this.products_obs = this.reqHandler.read(product_req);

    this.products_obs.subscribe( data => {
      this.products = data;
    });
  }

}
