import { ApiData } from "../data/api-data";
import { Deserializer } from "../data/deserializer";

export class Organisation extends ApiData{
    
    title : string = null;

    logo_vector : string = null;
    logo_pixel : string = null;

    address: any = null;
    translations : Translation[] = null;
    users : any[] = null;
    view : any = null;


    public setIdentifier(id : string){
        this.title = id;
    }

    public getIdentifier() : string{
        return this.title;
    }

    protected _deserialize(input : any) : Organisation {
        Deserializer.deserialize(this, input);
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

export class Translation extends ApiData {

    language : string;
    description : string;
    contact : string;
    claim : string;

    public setIdentifier(id : string){
        this.id = id;
    }

    public getIdentifier() : string{
        return this.id;
    }

    protected _deserialize(input : any) : ApiData {
        Deserializer.deserialize(this, input);
        return this;
    }

    protected _serialize() : any {
        return this;
    }

    public isValid() : boolean{
        return true;
    }

}