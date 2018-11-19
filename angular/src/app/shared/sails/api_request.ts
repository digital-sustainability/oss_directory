import { Table, TableWrapper } from "../oss/table";
import { environment } from "../../../environments/environment";

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
export class ApiRequest {

    public limit : number;
    private skip : number;
    private pagination_number : number;
    private current_page : number;
    public table : TableWrapper;

    constructor(table : Table){
        this.table = new TableWrapper(table);
    }

    //creates the url for the request
    getRequestString(withOptions : boolean) : String {
        let buffer = [];

        buffer.push(environment.apiURL);
        buffer.push("api/");
        buffer.push(this.table.getName());
        buffer.push("/");

        if (this.table.getId()){ //if the table entry already has an id then we create a findOne request url
            buffer.push(this.table.getId());
            return buffer.join("");
        }
        if (withOptions) {
            this.appendWhereString(buffer);
            this.appendRequestOptions(buffer);
        }
        return buffer.join("");
    }

    /**
     * Appends request options set in the
     * @param buffer 
     */
    private appendRequestOptions(buffer : Array<String>){
        if(this.limit) buffer.push("?limit=" + this.limit);
    }

    /**
     * Appends the where clause based on the table entry.  
     * Only uses the conditional "contains" option.
     * 
     * TODO implement other behavior like "<", ">", "starts_with" etc.
     * @param buffer 
     */
    private appendWhereString(buffer : Array<String>){
        let where = {};
        let entry = this.table.getEntry();
        for (let prop in entry){
            if (entry.hasOwnProperty(prop)) {
                where[prop] = { "contains" : entry[prop]};
            }
        }
        if (Object.keys(where).length > 0) {
            buffer.push("?where=");
            buffer.push(JSON.stringify(where));
        }
    }

    //TODO create pagination method
    public nextPage() {

    }
}