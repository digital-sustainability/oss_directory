import { Observable } from "rxjs";

export interface ApiAccess{
    get(url, data?, headers?): Observable<any>;
    post(url, data, headers?): Observable<any>;
    patch(url, data, headers?): Observable<any>;
    delete(url, data, headers?): Observable<any>;
}