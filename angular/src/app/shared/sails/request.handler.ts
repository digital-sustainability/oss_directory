import { RequestService } from "./request.interface";
import { ApiRequest} from "./api_request"
import { Observable } from "rxjs";
import { Table } from "../oss/table";
import { environment } from "../../../environments/environment";

/**
 * Handles Request Objects
 * Needs a Request Service eg. http or socket service
 * Executes a request object and manages any administration and error cases
 */
export class RequestHandler {


  constructor(private requestService : RequestService) { 
    
  }

  read(req : ApiRequest): Observable<any>{
    return this.requestService.get(req.getRequestString(true));
  }

  create(req : ApiRequest): Observable<any> {
    return this.requestService.post(req.getRequestString(false), req.table);
  }

  update(req : ApiRequest): Observable<any> {
    return this.requestService.patch(req.getRequestString(false), req.table);
  }

  delete(req : ApiRequest): Observable<any>{
    return this.requestService.delete(req.getRequestString(false), req.table);
  }


  //TODO Add error handling and logging
  handleError(e): void {
  }

  log(req: ApiRequest): void {

  }

}
