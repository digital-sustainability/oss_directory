import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.scss']
})
export class VendorListComponent implements OnInit {

  @Input() list;

  constructor() { }

  ngOnInit() {
  }

}
