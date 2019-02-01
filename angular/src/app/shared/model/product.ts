import { ApiData } from "../data/api-data";

export class Product extends ApiData{

    category : string = null;
    logo_vector: string = null;
    logo_pixel : string = null;
    title : string = null;
    links : string = null;
    source_code_link : string = null;
    
    user : any = null;
    translations : any[] = [];
    vendors : any[] = null;
    views : any[] = null;

    translation : ProductTranslation = null;

    public setIdentifier(id : string ){
        this.title = id;
    }

    public getIdentifier() : string {
        return this.title;
    }

    protected _deserialize(input : any) : ApiData {
        if (!input.translations) return this;
        this.translations = [];
        for (let trans of input.translations){
            let translation = new ProductTranslation().deserialize(trans);
            this.translations.push(translation);
        }
        if (this.translations[0]) this.translation = this.translations[0];
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

    public changeTranslation(trans : ProductTranslation) {
        //maybe check if it is valid?
        this.translation = trans;
    }
}

export class ProductTranslation extends ApiData{

    no_identifier : string;

    

    language : number = null;
    description : string = null;
    product : number

    public setIdentifier(id : string ){
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
}