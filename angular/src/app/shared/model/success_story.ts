import { Mutation } from "../graphql/mutation";
import { Query } from "../graphql/query";
import { TranslationHolder, Translation } from "./translation.interface";
import { ApiData } from "../data/api-data";
import { Deserializer } from "../data/deserializer";
import { DataTypes } from "./types";
import { Status } from "./status";

export class SuccessStory extends ApiData implements TranslationHolder {

    translations : SuccessStoryTranslation[] | Status = Status.Empty;
    products     : ApiData[] | Status                 = Status.Empty;
    client       : ApiData | Status                   = Status.Empty;
    vendor       : ApiData | Status                   = Status.Empty;

    currentTranslation : SuccessStoryTranslation | Status = Status.Empty;;

    
    public deserialize(input : any){
        Deserializer.deserialize(this, input);

        this.translations = Deserializer.deserializeAll(
            this.translations,
            this.factory,
            DataTypes.SuccessStoryTranslation
        ) as SuccessStoryTranslation[];

        //set current language based on global language field (test if that works correctly)

        let new_client = this.factory.create(DataTypes.Client);
        this.client = new_client.deserialize(this.client);
        let new_vendor = this.factory.create(DataTypes.Vendor);
        this.vendor = new_vendor.deserialize(this.vendor);
        this.products = Deserializer.deserializeAll(this.products, this.factory, DataTypes.Product);
        return this;
    }

    public set language(lang : string) { } //find translation with that language else throw or something

    public get identifier() : string | Status { 
        return this.currentTranslation != Status.Empty ? this.currentTranslation.identifier : Status.Empty;
    }
    public set identifier(id : string | Status){ if(this.currentTranslation != Status.Empty) this.currentTranslation.identifier = id; }

    public read() : string { return Query.SuccessStory; }
    public create() : string { return Mutation.createSuccessStory; }
    public update() : string { return Mutation.updateSuccessStory; }
    public delete() : string { return Mutation.deleteSuccessStory; }
}

export class SuccessStoryTranslation extends ApiData implements Translation {

    language : string | Status = Status.Empty;
    title    : string | Status = Status.Empty;
    lead     : string | Status = Status.Empty;
    base     : string | Status = Status.Empty;
    goal     : string | Status = Status.Empty;
    proposal : string | Status = Status.Empty;
    outcome  : string | Status = Status.Empty;

    public set identifier(id : string | Status ){ this.title = id; }
    public get identifier() : string | Status { return this.title; }

    public deserialize(input : any){ return Deserializer.deserialize(this, input); }

    public read()  : string { return Query.SuccessStoryTranslation; }
    public create(): string { return Mutation.createSuccessStoryTranslation; }
    public update(): string { return Mutation.updateSuccessStoryTranslation; }
    public delete(): string { return Mutation.deleteSuccessStoryTranslation; }
}