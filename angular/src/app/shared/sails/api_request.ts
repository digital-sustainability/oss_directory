import { TABLES, Table } from "../oss/table";
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

    private limit : number;
    private skip : number;
    private pagination_number : number;
    private current_page : number;
    public table : Table;

    constructor(table : Table){
        this.table = table;
    }

    //creates the url for the request
    getRequestString(withOptions : boolean) : String {
        let buffer = [];

        buffer.push(environment.apiURL);
        buffer.push("api/");
        buffer.push(this.table.getTableName());
        buffer.push("/");

        if (this.table.getTableId()){ //if the table entry already has an id then we create a findOne request url
            buffer.push(this.table.getTableId());
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
        for (let prop in this.table){
            if (this.table.hasOwnProperty(prop) && prop != "table_name") {
                where[prop] = {"contains": this.table[prop]};
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