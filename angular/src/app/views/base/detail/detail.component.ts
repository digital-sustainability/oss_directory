import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataProviderService } from '../../../shared/data/data-provider.service';
import { ApiData } from '../../../shared/data/api-data';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  public data : ApiData;
  private type : string;

  constructor(private route : ActivatedRoute, 
    private provider : DataProviderService) { }

  ngOnInit() {
    this.provider.type(this.route).subscribe(type => this.type = type);
    this.provider.getData(this.route).subscribe(data => this.data = data);
  }
}
