import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../../shared/data/data.service';
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
    private provider : DataService) { }

  ngOnInit() {
    this.provider.type(this.route).subscribe(type => this.type = type);

    //should only have one item in list (therefor data[0]) but we should handle that differently somehow i think
    this.provider.getData(this.route).subscribe(data => this.data = data[0]);
  }
}
