import { Component, OnInit } from '@angular/core';
import {RequestHandler} from "../shared/sails/request/request.handler";
import {Observable} from "rxjs";
import {Firm} from "../shared/oss/firm";
import {Product} from "../shared/oss/product";
import {HttpService} from "../shared/sails/http.service";
import {Table} from "../shared/oss/table";
import {MatDialog} from "@angular/material";
import {OssChangeEntryComponent} from "../oss-change-entry/oss-change-entry.component";
import {Request} from "../shared/sails/request/request";

@Component({
  selector: 'app-firms',
  templateUrl: './firms.component.html',
  styleUrls: ['./firms.component.scss']
})
export class FirmsComponent implements OnInit {

  private reqHandler : RequestHandler;

  private firms_obs : Observable<Firm[]>;
  protected firms : Firm[] = [];

  constructor(
    public dialog: MatDialog,
    private httpService : HttpService, ) {
    //define your type of request handler
    //right now we only support http requests
    this.reqHandler = new RequestHandler(httpService);
  }

  ngOnInit() {
    let firm_req = new Request(new Firm());
    this.firms_obs = this.reqHandler.read(firm_req);

    this.firms_obs.subscribe( data => {
      this.firms = data;
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(OssChangeEntryComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
