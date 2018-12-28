import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { ApiAccess } from './api-access';


@Injectable({
  providedIn: 'root'
})
export class MyHttpService implements ApiAccess {

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
