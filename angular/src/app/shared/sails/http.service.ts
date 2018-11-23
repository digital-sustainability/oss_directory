import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

import { Observable, pipe, of } from 'rxjs';
import { environment } from '../../../environments/environment';
import { map, catchError } from 'rxjs/operators';
import { RequestService } from './request/request.interface';


@Injectable({
  providedIn: 'root'
})
export class HttpService implements RequestService{

  constructor(private http: HttpClient) {}

  request(options): Observable<any>{
    return
  }

  get(url, data?, headers?): Observable<any>{
    return this.http.get(url);
  }

  post(url, data, headers?): Observable<any>{
    return this.http.post(url, data);
  }

  patch(url, data, headers?): Observable<any>{
    return this.http.patch(url, data);
  }

  delete(url, data, headers?): Observable<any>{
    return this.http.delete(url, data);
  }

  //TODO create request options
  options(body?, headers?, params?){
    let http_params = new HttpParams(params);
    let http_headers = new HttpHeaders(headers);
    return {headers : http_headers, params : http_params};
  }

}
