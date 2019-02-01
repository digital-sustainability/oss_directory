import { Component, OnInit, Input } from '@angular/core';
import { ApiData } from '../../../shared/data/api-data';
import { Product } from '../../../shared/model/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  private product : Product;

  @Input() set data(data : ApiData) {
    if(data) this.product = data as Product;
  }

  constructor() { }

  ngOnInit() {
  }

}
