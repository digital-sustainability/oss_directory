import { RequestService } from "./request.interface";
import { ApiRequest} from "./api_request"
import { Observable, pipe} from "rxjs";
import { map } from 'rxjs/operators';
import { Table } from '../oss/table';

/**
 * Handles Request Objects
 * Needs a Request Service eg. http or socket service
 * Executes a request object and manages any administration and error cases
 */
export class RequestHandler {


  constructor(private requestService : RequestService) { 
    
  }

  //if list is provided push all received entries to list
  read(req : ApiRequest, list? : Table[], keepEntries? : boolean): Observable<any>{
    let obs = this.requestService.get(req.getRequestString(true));
    if (list){
      return obs.pipe(
        map((data) => {
          if (!keepEntries) {
            list.splice(0, list.length);
          }
          return data.map((item) => {
            let entry = req.table.deserialize(item); //deserialize returns new instance
            list.push(entry);
          });
        })
      );
    }
    return obs;
  }

  create(req : ApiRequest): Observable<any> {
    return this.requestService.post(req.getRequestString(false), req.table.getEntry());
  }

  update(req : ApiRequest): Observable<any> {
    return this.requestService.patch(req.getRequestString(false), req.table.getEntry());
  }

  delete(req : ApiRequest): Observable<any>{
    return this.requestService.delete(req.getRequestString(false), req.table.getEntry());
  }



  


  //TODO Add error handling and logging
  handleError(e): void {
  }

  log(req: ApiRequest): void {

  }

}
