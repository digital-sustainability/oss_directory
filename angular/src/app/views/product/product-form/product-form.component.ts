import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ApiData } from '../../../shared/data/api-data';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  @Input() data : ApiData;

  @Output() _submit : EventEmitter<ApiData> = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }

  private submit() {
    this._submit.emit(this.data);
  }


}
