import { Component, OnInit, Input } from '@angular/core';
import { ApiData } from '../../../shared/data/api-data';
import { Product } from '../../../shared/model/product';
import { Vendor } from '../../../shared/model/vendor';
import { DataProviderService } from '../../../shared/data/data-provider.service';
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
      this.product = data as Product;
      this.vendors = this.provider.getDataAssociations(new Vendor(), this.product.organisations);
      this.clients = this.provider.getDataAssociations(new Client(), this.product.organisations);
      this.community = this.provider.getDataAssociations(new Community(), this.product.organisations);
    }
  }

  constructor(
    private provider : DataProviderService
  ) { }

  ngOnInit() {
  }

}
