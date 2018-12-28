import { Injectable } from '@angular/core';
import { ApiAccess } from './api-access';
import { ApiData } from './api-data';
import { ApiUrl } from '../url/api-url';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})

export class RequestService{

    constructor(
        private access : ApiAccess){}

    public create(data : ApiData) : Observable<any>{
        let url = ApiUrl.build(data);
        return this.access.post(url, data);
    }

    public read(data : ApiData) : Observable<any>{
        let url = ApiUrl.build(data);
        return this.access.get(url, data);
    }


    public update(data : ApiData) : Observable<any>{
        let url = ApiUrl.build(data);
        return this.access.patch(url, data);
    }


    public delete(data : ApiData) : Observable<any>{
        let url = ApiUrl.build(data);
        return this.access.delete(url, data);
    }


}