import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-vendor-form',
  templateUrl: './vendor-form.component.html',
  styleUrls: ['./vendor-form.component.scss']
})
export class VendorFormComponent implements OnInit {

  @Input() data : string;
  constructor() { }

  ngOnInit() {
  }

}
