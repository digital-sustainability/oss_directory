import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { ApiData } from './api-data';
import { Deserializer } from './deserializer';
import { ApiDataProxy } from './api-data-proxy';
import { RequestService } from './request.service';

@Injectable({
    providedIn: 'root'
})

export class DataProviderService {
    
    constructor(
        private req : RequestService){}

    public getData(route : ActivatedRoute) : Observable<ApiData> {

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

    private resolveParams(params) : ApiDataProxy {

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
}