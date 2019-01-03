import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-reference-form',
  templateUrl: './reference-form.component.html',
  styleUrls: ['./reference-form.component.scss']
})
export class ReferenceFormComponent implements OnInit {

  @Input() data : string;
  constructor() { }

  ngOnInit() {
  }

}
