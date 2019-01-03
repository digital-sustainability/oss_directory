import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { DataProviderService } from '../../../shared/data/data-provider.service';
import { ApiData } from '../../../shared/data/api-data';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {

  private type : string;
  private data : ApiData[];

  constructor(
    private route : ActivatedRoute, 
    private provider : DataProviderService) { }

  ngOnInit() {

    this.provider.type(this.route).subscribe(type => this.type = type);
    this.provider.getData(this.route).subscribe(data => this.data = data);
  }

}
