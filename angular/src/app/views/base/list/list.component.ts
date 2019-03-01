import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { DataService } from '../../../shared/data/data.service';
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

  public type : string;
  private data : ApiData[];

  constructor(
    protected route : ActivatedRoute, 
    protected provider : DataService) { 
      super();
    }

  ngOnInit() {
    this.readType().subscribe(type => this.type = type);
    this.requestData().subscribe(data => this.data = data);
  }
}
