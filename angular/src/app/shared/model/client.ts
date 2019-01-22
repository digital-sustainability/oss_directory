import { Organisation } from "./organisation";
import { ApiData } from "../data/api-data";
import { Deserializer } from "../data/deserializer";

export class Client extends ApiData {

    organisation : Organisation = new Organisation();

    industry : string = null;

    products : any[] = null;
    vendors : any[] = null;
    communities : any[] = null;
    success_stories : any[] = null;

    public setIdentifier(id : string ){
        this.organisation.setIdentifier(id);
    }

    public getIdentifier() : string {
        return this.organisation.getIdentifier();
    }

    protected _deserialize(input : any) : ApiData{
        this.organisation = new Organisation().deserialize(input.organisation) as Organisation;
        return this;
    }

    protected _serialize() : any {
        let object = JSON.parse(this.input);
        if (object['organisation'] && object['organisation']['id']) {
            object['organisation'] = object['organisation']['id'];
        }
        if (object['industry'] && object['industry']['id']) {
            object['industry'] = object['industry']['id'];
        }
        return object;
    }

    public isValid() : boolean{
        return true;
    }

}