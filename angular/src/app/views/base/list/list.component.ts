import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { DataProviderService } from '../../../shared/data/data-provider.service';
import { ApiData } from '../../../shared/data/api-data';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {

  private data : ApiData;

  constructor(
    private route : ActivatedRoute, 
    private provider : DataProviderService) { }

  ngOnInit() {
    let obs = this.provider.getData(this.route);
    obs.subscribe(data => {this.data = data, console.log(data)});
    

  }

}
