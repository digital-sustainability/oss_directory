import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of, zip } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { ApiUrl } from '../url/api-url';
import { HttpService } from '../sails/http.service';
import { Factory } from '../model/factory';
import { ApiData } from './api-data';
import { environment } from '../../../environments/environment';
import { Vendor } from '../model/vendor';
import { Status } from '../model/status';
import { OrganisationTranslation } from '../model/organisation';

@Injectable({
    providedIn: 'root'
})

export class DataService {
    
    constructor(
        private http : HttpService,
        private url : ApiUrl ){}
    
    public test(){

    }

    public makeRequest(object : ApiData, request) {
        for (let prop in request.variables){
            request.variables[prop] = object[prop] != Status.Empty ? object[prop] : null;
        }
        return request;
    }

    public send(graphql_request : any) : Observable<any> {
        return this.http.post(environment.apiURL + "api/neo/test", graphql_request);
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
                    let request = this.makeRequest(data, data.READ);
                    return this.send(request).pipe(map(res => {
                        console.log(res);
                        let entries = [];
                        for (let entry of res.data.list){
                            if (!entry) continue;
                            let x = Factory.create(data.getName());
                            x.deserialize(entry);
                            entries.push(x);
                        }
                        return entries;
                    }));
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