import { ApiData } from "../data/api-data";

export class Address extends ApiData{

    public getIdentifier() : string {
        return "";
    }

    public setIdentifier(id : string){
        
    }

    protected _deserialize(input : any) : ApiData{
        return this;
    }

    protected _serialize() : any {
        return this;
    }

    public isValid() : boolean{
        return true;
    }
    
}