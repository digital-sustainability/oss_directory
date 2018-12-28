import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'


@Injectable({
    providedIn: 'root',
})
export class UrlReaderService {

    private _dataType : string;
    private _id : string;

    constructor(
        private router : ActivatedRoute)
    {
        this.router.params.subscribe(
            params => 
            this._dataType = params['data']);

        this.router.params.subscribe(
            params => 
            this._id = params['id']);
    }

    public dataType() : string {
        return this._dataType;
    }

    public id() : string {
        return this._id;
    }
}