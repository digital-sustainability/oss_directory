import { ApiData } from "../data/api-data";
import { Deserializer } from "../data/deserializer";

export class Product extends ApiData{

    category : string = null;
    logo_vector: string = null;
    logo_pixel : string = null;
    title : string = null;
    links : string = null;
    source_code_url : string = null;
    
    user : any = null;
    translations : any[] = null;
    vendors : any[] = null;
    views : any[] = null;

    public setIdentifier(id : string ){
        this.title = id;
    }

    public getIdentifier() : string {
        return this.title;
    }

    protected _deserialize(input : any) : ApiData {
        return this;
    }

    protected _serialize() : any {
        let object = JSON.parse(this.input);
        if (object.category && object.category.id) {
            object.category = object.category.id;
        }
        return object;
    }

    public isValid() : boolean{
        return true;
    }
}

export class Translation extends ApiData{

    language : string;
    description : string;

    public setIdentifier(id : string ){
        this.id = id;
    }

    public getIdentifier() : string {
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