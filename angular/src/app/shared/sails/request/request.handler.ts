import {
  RequestService
} from "./request.interface";
import {
  Observable,
  pipe
} from "rxjs";
import {
  map
} from 'rxjs/operators';
import {
  Table
} from '../../oss/table';
import {
  Request
} from './request';
import {
  TableHelper
} from '../../oss/table.helper';

/**
 * Handles Request Objects
 * Needs a Request Service eg. http or socket service
 * Executes a request object and manages any administration and error cases
 */
export class RequestHandler {


  constructor(private requestService: RequestService) {}

  public read(
    req: Request)
    : Observable < any > 
  {
    let requestString = req.getRequestString(true);
    let observable = this.requestService.get(requestString);
    return observable;
  }

  public create(
    req: Request): 
    Observable < any > 
  {
    let requestString = req.getRequestString(false);
    let observable = this.requestService.post(
      requestString,
      req.table
    );
    return observable;
  }

  public update(
    req: Request)
    : Observable < any > 
  {
    let requestString = req.getRequestString(false);
    let observable = this.requestService.patch(
      requestString,
      req.table
    );
    return observable;
  }

  public delete(
    req: Request)
    : Observable < any > 
  {
    let requestString = req.getRequestString(false);
    let observable = this.requestService.delete(
      requestString,
      req.table
    );
    return observable;
  }


  //TODO: Add error handling and logging
  handleError(e): void {}

  log(req: Request): void {

  }

}
