import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiData } from '../../../shared/data/api-data';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  @Input() list : ApiData;

  constructor() { }

  ngOnInit() {}

}
