import { Organisation } from "./organisation";
import { ApiData } from "../data/api-data";
import { Deserializer } from "../data/deserializer";

export class Language extends ApiData {

    name : string = null;
    
    public setIdentifier(id : string ){
        this.name = id;
    }

    public getIdentifier() : string {
        return this.name;
    }

    protected _deserialize(input : any) : ApiData{
        return this;
    }

    protected _serialize() : any {
        let object = JSON.parse(this.input);
        return object;
    }

    public isValid() : boolean{
        return true;
    }

}