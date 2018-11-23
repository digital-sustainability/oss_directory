import {
  Table
} from "../../oss/table";
import {
  environment
} from "../../../../environments/environment";
import {
  Request
} from "./request";

/**
 * 
 */
export class RequestHelper {

  public static build(
    request: Request, 
    withOptions: boolean)
    : String 
  {
    let buffer = [];
    this.addEnvironment(buffer);
    this.addModel(buffer, request.table);

    //if the table entry already has an id then we create a findOne request url
    if (request.table.id) 
    {
      this.addId(buffer, request.table);

    } 
    else if (withOptions) 
    {
      this.addFilter(buffer, request.table);
      this.addOptions(buffer, request);
    }
    return buffer.join("");
  }

  private static addId(
    buffer: Array < String > , table: Table) 
  {
    buffer.push(table.id + "");
    buffer.push("/");
  }

  private static addEnvironment(
    buffer: Array < String > ) 
  {
    buffer.push(environment.apiURL);
    buffer.push("api/");
  }

  private static addModel(
    buffer: Array < String > , table: Table) 
  {
    buffer.push(table.getName());
    buffer.push("/");
  }

  private static addOptions(
    buffer: Array < String > , request: Request) 
  {
    if (request.limit) 
    {
      buffer.push("?limit=" + request.limit);
    }

    if (request.skip) 
    {
      buffer.push("?skip=" + request.skip);
    }
  }

  private static addFilter(
    buffer: Array < String > , table: Table) 
  {
    let where = {};
    for (let prop in table) 
    {
      if (table.hasOwnProperty(prop)) 
      {
        where[prop] = {
          "contains": table[prop]
        };
      }
    }
    if (Object.keys(where).length > 0) 
    {
      buffer.push("?where=");
      buffer.push(JSON.stringify(where));
    }
  }
}
