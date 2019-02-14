import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of, zip } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { ApiDataProxy } from './api-data-proxy';
import { ApiUrl } from '../url/api-url';
import { HttpService } from '../sails/http.service';
import { Factory } from '../model/factory';
import { ApiData } from './api-data';

@Injectable({
    providedIn: 'root'
})

export class DataProviderService {

    private proxy : ApiDataProxy
    
    constructor(
        private http : HttpService,
        private url : ApiUrl ){
            this.proxy = new ApiDataProxy(this.http, this.url);
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
                    return this.proxy.read(data);
                } else {
                    //TODO: exception handling
                }
            })
        );
    }

    /**
     * Return a list of all associations based on a provided list with objects
     * Make sure that all objects have an id attribute
     * @param type 
     * @param list 
     */
    public getDataAssociations(type : ApiData, list : any[]) : any[] {

        let results = [];
        for (let item of list){
            type.id = item.id;
            let obs = this.proxy.read(type);
            obs.subscribe(res => results.push(res));
        }
        return results;
        
    }

    /**
     * 
     * @param params 
     */
    public resolveParams(params) : ApiData {

        let type = params['type'];
        let id = params['id']; //for seo links we use names and titles as ID

        let data = Factory.createNew(type);
        if (data) data.setIdentifier(id);
        return data;
    }

    public type(route : ActivatedRoute) : Observable<string> {
        return route.params.pipe(map(params => params['type']));
    }

    public id(route : ActivatedRoute) : Observable<string> {
        return route.params.pipe(map(params => params['id']));
    }


}