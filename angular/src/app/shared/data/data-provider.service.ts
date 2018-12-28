import { Injectable } from '@angular/core';
import { UrlReaderService } from '../url/url-reader.service';
import { ApiAccess } from './api-access';

@Injectable({
    providedIn: 'root'
})

export class DataProviderService {
    
    constructor(
        private url : UrlReaderService, 
        private api : ApiAccess){}

    public getData(){
    }

}