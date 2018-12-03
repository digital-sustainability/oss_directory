import { Table } from "../../oss/table";
import { RequestHelper } from "./request.helper";
 
/**
 * 
 * Helps building api requests
 * 
 * TODO
 * 
 * Create independant option builder that does not require a table entry (for later use);
 * 
 * Load limit options from user cookies
 * 
 */
export class Request {

    public limit : number;
    public skip : number;
    public current_page_number : number = 1;
    public table : Table;

    constructor(table : Table)
    {
      this.table = table;
    }

    public getRequestString(
      withOptions : boolean) 
      : String 
    {
      return RequestHelper.build(this, withOptions);
    }

    public getCurrentPageNumber() : number 
    {
      return this.current_page_number;
    }

    public setPageNumber(page_number : number) 
    {
      this.current_page_number = page_number;
    }

    public nextPage() 
    {
      this.current_page_number++;
    }
}