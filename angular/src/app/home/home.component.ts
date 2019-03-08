import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data/data.service';
import { Vendor } from '../shared/model/vendor';
import { Factory } from '../shared/model/factory';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private data : DataService
  ) { }

  ngOnInit() {
  }

}
