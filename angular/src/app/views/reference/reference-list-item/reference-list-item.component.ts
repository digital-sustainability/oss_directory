import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-reference-list-item',
  templateUrl: './reference-list-item.component.html',
  styleUrls: ['./reference-list-item.component.scss']
})
export class ReferenceListItemComponent implements OnInit {

  @Input() item;
  constructor() { }

  ngOnInit() {
  }

}
