import { ApiData } from "../data/api-data";

export abstract class View extends ApiData {

    no_identifier : string;
    counter : number = null;

    public set identifier(id : string){
        this.no_identifier = id;
    }

    public get identifier() : string {
        return this.no_identifier;
    }

}