import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { DataProviderService } from '../../../shared/data/data-provider.service';
import { ApiData } from '../../../shared/data/api-data';
import { Observable } from 'rxjs';
import { Setup } from '../../setup';
import { Vendor } from '../../../shared/model/vendor';
import { Client } from '../../../shared/model/client';
import { Community } from '../../../shared/model/community';
import { Product } from '../../../shared/model/product';
import { SuccessStory } from '../../../shared/model/success_story';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent extends Setup implements OnInit {

  private type : string;
  private data : ApiData[];

  constructor(
    protected route : ActivatedRoute, 
    protected provider : DataProviderService) { 
      super();
    }

  ngOnInit() {
    this.readType().subscribe(type => this.type = type);
    this.requestData().subscribe(data => this.data = data);
    this.test();
  }

  test(){
    let x = [{id : 1},{id : 2}];
    let vendor = new Vendor();
    console.log(this.provider.getDataAssociations(vendor, x));
    let client = new Client();
    console.log(this.provider.getDataAssociations(client, x));
    let community = new Community();
    console.log(this.provider.getDataAssociations(community, x));
    let product = new Product();
    console.log(this.provider.getDataAssociations(product, x));
    let success_story = new SuccessStory();
    console.log(this.provider.getDataAssociations(success_story, x));
    

  }
}
