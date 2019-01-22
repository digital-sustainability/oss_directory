import { Organisation } from "./organisation";
import { ApiData } from "../data/api-data";
import { Deserializer } from "../data/deserializer";

export class Community extends ApiData {

    organisation : Organisation = new Organisation();

    website : string = null;
    
    vendors : any[] = null;
    clients : any[] = null;
    products : any[] = null;

    public setIdentifier(id : string){
        this.organisation.setIdentifier(id);
    }

    public getIdentifier() : string {
        return this.organisation.getIdentifier();
    }

    protected _deserialize(input : any) : ApiData{
        Deserializer.deserialize(this, input);
        this.organisation = new Organisation().deserialize(input.organisation) as Organisation;
        return this;
    }

    protected _serialize() : any {
        let object = JSON.parse(this.input);
        if (object['organisation'] && object['organisation']['id']) {
            object['organisation'] = object['organisation']['id'];
        }
        return object;
    }

    public isValid() : boolean{
        return true;
    }

}