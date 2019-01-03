import { Component, OnInit, Input } from '@angular/core';
import { ApiData } from '../../../shared/data/api-data';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  @Input() item : ApiData;
  private type : string;

  constructor() { }

  ngOnInit() {
    this.type = this.item.getName();
  }

}
