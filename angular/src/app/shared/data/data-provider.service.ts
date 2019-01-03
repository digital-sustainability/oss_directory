import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Deserializer } from './deserializer';
import { ApiDataProxy } from './api-data-proxy';
import { RequestService } from './request.service';

@Injectable({
    providedIn: 'root'
})

export class DataProviderService {

    private currentData : any;
    private historyData : Array<any>;
    
    constructor(
        private req : RequestService){}

    public getData(route : ActivatedRoute) : Observable<any> {

        return route.params.pipe(
            map( (params) => this.resolveParams(params)),
            switchMap( proxy => 
            {
                if(proxy)
                {
                    return proxy.read();
                }
            })
        );
    }

    public resolveParams(params) : ApiDataProxy {

        let type = params['type'];
        let id = params['id'];

        let data = Deserializer.createNew(type);
        let proxy;
        if (data) {
            data.id = id;
            proxy = new ApiDataProxy(this.req, data);
        }
        return proxy;
    }


    public type(route : ActivatedRoute) : Observable<string> {
        return route.params.pipe(map(params => params['type']));
    }

    public id(route : ActivatedRoute) : Observable<string> {
        return route.params.pipe(map(params => params['id']));
    }


}