import { Organisation } from "./organisation";
import { ApiData } from "../data/api-data";
import { Deserializer } from "../data/deserializer";

export class View extends ApiData{

    no_identifier : string;
    counter : number = null;

    public setIdentifier(id : string){
        this.no_identifier = id;
    }

    public getIdentifier() : string {
        return this.no_identifier;
    }

    protected _deserialize(input : any) : ApiData {
        return this;
    }

    protected _serialize() : any {
        return this;
    }

    public isValid() : boolean{
        return true;
    }

    public test() {}

}