import { Organisation } from "./organisation";
import { ApiData } from "../data/api-data";

export class Vendor extends ApiData {

    organisation : Organisation = new Organisation();

    website : string = null;
    locations : string = null;
    employee_num : number = null;
    
    provided_services : any[] = null;
    success_stories : any[] = null;
    communities : any[] = null;

    public setIdentifier(id : string ){
        this.organisation.setIdentifier(id);
    }

    public getIdentifier() : string {
        return this.organisation.getIdentifier();
    }

    protected _deserialize(input : any) : Vendor {
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

    /**
     * Here we can check if an entry is valid
     * To be a valid entry a vendor needs to connected to an organisation entry
     */
    public isValid() : boolean{
        if(!this.organisation){
            console.log(this.getName() + " does not have an organisation associated!");
            return false;
        } else if (!this.organisation.id){ //if the organisation does not have an id entry then it is not yet in the database
            //we could enforce that within the api later on
            console.log("Organisation has to be created first in the database");
        } else {
            return this.organisation.isValid();
        }
    }
}