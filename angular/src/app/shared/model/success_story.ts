import { ApiData } from "../data/api-data";

export class SuccessStory extends ApiData {

    translations : any[] = [];
    views : any[] = null;
    products : any[] = null;
    client : any = null;
    vendor : any = null;

    public constructor() {
        super();
        if(!this.translations.length){
            this.translations.push(new SuccessStoryTranslation());
        }
    }

    //carefull with multiple language support
    //TODO: test this behavior
    public getIdentifier() : string {
        return this.translations[0].title;
    }

    public setIdentifier(id : string){
        this.translations[0].title = id;
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

export class SuccessStoryTranslation extends ApiData{

    language : string = null;
    title : string = null;
    lead : string = null;
    base : string = null;
    goal : string = null;
    proposal : string = null;
    outcome : string = null;


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
        return this;
    }

    public isValid() : boolean{
        return true;
    }
}