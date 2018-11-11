import { Inject } from "@angular/core";
import { RequestService } from "../sails/request.interface";
import { environment } from "../../../environments/environment";
import { DefaultUrlSerializer } from "@angular/router";

export abstract class Table implements Serializable<Table>{
    
    //id is not accessable by user and is only defined by the database
    protected id : number;

    abstract table_name : string;
    
    protected constructor(){
        //TODO Check if table_name is empty
    }

    abstract deserialize(input: Object): Table;

    public getTableName() : string {
        return this.table_name;
    }

    public getTableId() : number {
        return this.id;
    }
 
}

export enum TABLES {
    FIRM = "firm",
    CUSTOMER = "customer",
    PRODUCT = "product",
    REFERENCE = "reference",
}
