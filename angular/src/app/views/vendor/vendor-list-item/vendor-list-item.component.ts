import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-vendor-list-item',
  templateUrl: './vendor-list-item.component.html',
  styleUrls: ['./vendor-list-item.component.scss']
})
export class VendorListItemComponent implements OnInit {

  @Input() item;
  constructor() { }

  ngOnInit() {
  }

}
