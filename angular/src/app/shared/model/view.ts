import { Organisation } from "./organisation";
import { ApiData } from "../data/api-data";
import { Deserializer } from "../data/deserializer";

export class View extends ApiData{

    counter : number = null;

    public setIdentifier(id : string){
        this.id = id;
    }

    public getIdentifier() : string {
        return this.id;
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