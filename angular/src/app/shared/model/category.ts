import { CategoryQuery } from "../graphql/query";
import { createCategory, updateCategory, deleteCategory } from "../graphql/mutation";
import { ApiData } from "../data/api-data";
import { Deserializer } from "../data/deserializer";
import { Status } from "./status";

export class Category extends ApiData {

    title  : string | Status = Status.Empty;
    groups : string | Status = Status.Empty;
    
    public set identifier(id : string | Status) { this.title = id;  }
    public get identifier(): string | Status { return this.title;}

    public deserialize(input : any){ return Deserializer.deserialize(this, input); }

    public READ = CategoryQuery; 
    public CREATE = createCategory; 
    public UPDATE = updateCategory; 
    public DELETE = deleteCategory; 

}