import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-reference-detail',
  templateUrl: './reference-detail.component.html',
  styleUrls: ['./reference-detail.component.scss']
})
export class ReferenceDetailComponent implements OnInit {

  @Input() data;
  constructor() { }

  ngOnInit() {
  }

}
