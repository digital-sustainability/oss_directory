import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { HttpService } from '../sails/http.service';
import { Factory } from '../model/factory';
import { ApiData } from './api-data';
import { environment } from '../../../environments/environment';
import { Status } from '../model/status';

@Injectable({
    providedIn: 'root'
})

export class DataService {
    
    constructor(
        private http : HttpService){}
    
    private makeRequest(object : ApiData, request) {
        if (!request) console.log("request not yet defined sry :)");
        for (let prop in request.variables){
            if (object[prop] != Status.Empty){
                request.variables[prop] = object[prop];
            } else { //remove the variable
                delete request.variables[prop];
            }
        }
        return request;
    }

    public sendRequest(data : ApiData, request : any) : Observable<any> {
        let graphql_request = this.makeRequest(data, request);
        console.log("in progress");
        return null;
        return this.http.post(environment.apiURL + "api/", graphql_request);
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
                    console.log(data);
                    return this.sendRequest(data, data.READ).pipe(map(res => {
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