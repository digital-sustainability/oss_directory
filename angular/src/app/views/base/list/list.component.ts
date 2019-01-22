import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { DataProviderService } from '../../../shared/data/data-provider.service';
import { ApiData } from '../../../shared/data/api-data';
import { Observable } from 'rxjs';
import { Setup } from '../../setup';

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
  }



}
