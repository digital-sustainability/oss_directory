import { Injectable } from '@angular/core';
import { HttpService } from '../sails/http.service';
import { Observable } from 'rxjs';
import { ApiUrl } from '../url/api-url';
import { ApiData } from './api-data';

@Injectable({
    providedIn : 'root',
})

export class RequestService {

    constructor(
        private http : HttpService, 
        private url : ApiUrl){}

    public read(
        data : ApiData) : Observable<any> 
    {
        let url = this.url.build(data);
        return this.http.get(url);
    }
    
    public create(
        data : ApiData) : Observable<any> 
    {
        let url = this.url.build(data);
        return this.http.post(url, data);
    }
    
    public update(
        data : ApiData) : Observable<any> 
    {
        let url = this.url.build(data);
        return this.http.patch(url, data);
    }
    
    public delete(
        data : ApiData) : Observable <any> 
    {
        let url = this.url.build(data);
        return this.http.delete(url, data);
    }
    
    
    //TODO: Add error handling and logging
    handleError(e): void {}
    
    log(req: Request): void {}

}