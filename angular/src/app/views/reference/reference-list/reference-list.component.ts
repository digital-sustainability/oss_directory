import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-reference-list',
  templateUrl: './reference-list.component.html',
  styleUrls: ['./reference-list.component.scss']
})
export class ReferenceListComponent implements OnInit {

  @Input() list;

  constructor() { }

  ngOnInit() {
  }

}
