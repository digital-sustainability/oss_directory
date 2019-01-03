import { Component, OnInit } from '@angular/core';
import { DataProviderService } from '../../../shared/data/data-provider.service';
import { ActivatedRoute } from '@angular/router';
import { ApiData } from '../../../shared/data/api-data';
import { map, switchMap } from 'rxjs/operators';
import { Deserializer } from '../../../shared/data/deserializer';
import { Observable, empty, of, never } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  private type : string;
  private data : ApiData;

  constructor(
    private route : ActivatedRoute, 
    private provider : DataProviderService) { 

    }

  ngOnInit() {

    //if an id is given requests the item based on type and id
    //if there is no id returns a new ApiData Object based on the type

    console.log("form on init");

    this.provider.type(this.route).subscribe(type => this.type = type);

    this.route.params.subscribe(params => {
      let proxy = this.provider.resolveParams(params);
      let id = proxy.data().id;
      if (id) {
        this.provider.getData(this.route).subscribe(data => this.data = data); //observable inside observable (not that great)
      }
      else 
      {
        this.data = proxy.data();
      }
    });
    
  }

  private submit($event) {
    console.log($event);
    console.log("clicked");
  }
}
