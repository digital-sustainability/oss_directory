import { Observable } from 'rxjs';

export interface RequestService {

  request(options): Observable<any>;
  get(url, data?, headers?): Observable<any>;
  post(url, data, headers?): Observable<any>;
  patch(url, data, headers?): Observable<any>;
  delete(url, data, headers?): Observable<any>;

}
