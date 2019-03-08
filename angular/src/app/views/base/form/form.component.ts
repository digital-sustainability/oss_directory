import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../shared/data/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiData} from '../../../shared/data/api-data';
import { map, switchMap } from 'rxjs/operators';
import { HttpService } from '../../../shared/sails/http.service';
import { of } from 'rxjs';
import { Status } from '../../../shared/model/status';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  public type : string;
  private data : ApiData;


  constructor(
    private router : Router,
    private route : ActivatedRoute, 
    private provider : DataService,
    private http : HttpService){}

    //maybe create two forms : one for new entries and one for editing?
    //later for different behavior and views

  ngOnInit() {

    //if an id is given requests the item based on type and id
    //if there is no id returns a new ApiData Object based on the type

    this.setup();
  }

  setup() {
    
    let obs = this.route.params.pipe(
      map( (params) => {
        let data = this.provider.resolveParams(params);
        this.type = data.getName();
        return data;
      }),
      switchMap( data => {
        if (data.identifier != Status.Empty){
          return this.provider.getData(this.route);
        } else {
          return of([data]);
        }
      })
    );
    obs.subscribe(res => this.data = res[0]);
  }

  private submit(){
    //update url maybe on change
  }
}
