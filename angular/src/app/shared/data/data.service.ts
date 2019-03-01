import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of, zip } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { ApiUrl } from '../url/api-url';
import { HttpService } from '../sails/http.service';
import { Factory } from '../model/factory';
import { ApiData } from './api-data';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})

export class DataService {

    
    constructor(
        private http : HttpService,
        private url : ApiUrl ){}

    public send(graphql_request : string) : Observable<any> {
        return this.http.post(environment.graphQlUrl, graphql_request);
    }

    /**
     * Retrieves data based on the given route
     * @param route 
     * @returns observable (api should always return a list)
     */
    public getData(route : ActivatedRoute) : Observable<any> {
        return route.params.pipe(
            map( (params) => this.resolveParams(params)),
            switchMap( data => 
            {
                if(data)
                {
                    return this.send(data.read());
                } else {
                    //TODO: exception handling
                }
            })
        );
    }

    /**
     * 
     * @param params 
     */
    public resolveParams(params) : ApiData {

        let type = params['type'];
        let id = params['id']; //for seo links we use names and titles as ID

        let data = Factory.create(type);
        if (data) data.identifier = id;
        return data;
    }

    public type(route : ActivatedRoute) : Observable<string> {
        return route.params.pipe(map(params => params['type']));
    }

    public id(route : ActivatedRoute) : Observable<string> {
        return route.params.pipe(map(params => params['id']));
    }


}