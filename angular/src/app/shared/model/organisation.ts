import { ApiData } from "../data/api-data";
import { Deserializer } from "../data/deserializer";

export class Organisation extends ApiData{
    
    title : string = null;

    logo_vector : string = null;
    logo_pixel : string = null;

    address: any = null;
    translations : OrganisationTranslation[] = null;
    users : any[] = null;
    view : any = null;


    public setIdentifier(id : string){
        this.title = id;
    }

    public getIdentifier() : string{
        return this.title;
    }

    protected _deserialize(input : any) : Organisation {
        return this;
    }

    protected _serialize() : any {
        this.input = JSON.stringify(this);
        let object = JSON.parse(this.input);
        
        if (object.address && object.address.id) {
            object.address = object.address.id;
        }
        return object;
    }

    public isValid() : boolean{
        return true;
    }
}

export class OrganisationTranslation extends ApiData {

    no_identifier : string;

    language : string;
    description : string;
    contact : string;
    claim : string;

    public setIdentifier(id : string){
        this.no_identifier = id;
    }

    public getIdentifier() : string{
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

}