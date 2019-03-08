import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { DataService } from '../../../shared/data/data.service';
import { ApiData } from '../../../shared/data/api-data';
import { Setup } from '../../setup';

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
    this.requestData().subscribe(data => {console.log(data), this.data = data});
  }
}
