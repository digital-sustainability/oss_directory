import { Factory } from "../model/factory.interface";
import { Status } from "../model/status";

export abstract class ApiData {

    public _id :       number | Status = Status.Empty;
    public createdAt : string | Status = Status.Empty;
    public updatedAt : string | Status = Status.Empty;

    constructor(
        protected factory : Factory, 
        input? : any){
            if(input) this.deserialize(input);

        }

     //class name corresponds with db model!
    public getName() : string { return this.constructor.name.toLowerCase(); }

    public set identifier(id : string | Status) { this._id = id != Status.Empty ? parseInt(id, 10) : Status.Empty } 
    public get identifier() : string | Status { return this._id + "" }

    abstract deserialize(input : any) : ApiData | Status;

    public abstract READ;
    public abstract CREATE;
    public abstract UPDATE;
    public abstract DELETE;

}

