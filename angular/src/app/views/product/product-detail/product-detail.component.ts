import { Component, OnInit, Input } from '@angular/core';
import { ApiData } from '../../../shared/data/api-data';
import { Product } from '../../../shared/model/product';
import { Vendor } from '../../../shared/model/vendor';
import { DataService } from '../../../shared/data/data.service';
import { Client } from '../../../shared/model/client';
import { Community } from '../../../shared/model/community';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  public product : Product;
  public vendors : Vendor[];
  public clients : Client[];
  public community : Community[];

  @Input() set data(data : ApiData) {
    if(data) {
      console.log(data);
      this.product = data as Product;
    }
  }

  constructor(private provider : DataService){}

  ngOnInit() {

  }

}
