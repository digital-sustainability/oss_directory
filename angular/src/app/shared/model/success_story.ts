import { createSuccessStory, updateSuccessStory, deleteSuccessStory, updateSuccessStoryTranslation, deleteSuccessStoryTranslation, createSuccessStoryTranslation } from "../graphql/mutation";
import { SuccessStoryQuery, SuccessStoryTranslationQuery } from "../graphql/query";
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
        this.client = this.client != Status.Empty ? new_client.deserialize(this.client) : Status.Empty;
        let new_vendor = this.factory.create(DataTypes.Vendor);
        this.vendor = this.vendor != Status.Empty ? new_vendor.deserialize(this.vendor) : Status.Empty;
        this.products = Deserializer.deserializeAll(this.products, this.factory, DataTypes.Product);
        return this;
    }

    public set language(lang : string) { } //find translation with that language else throw or something

    public get identifier() : string | Status { 
        return this.currentTranslation != Status.Empty ? this.currentTranslation.identifier : Status.Empty;
    }
    public set identifier(id : string | Status){ if(this.currentTranslation != Status.Empty) this.currentTranslation.identifier = id; }

    public READ = SuccessStoryQuery; 
    public CREATE = createSuccessStory; 
    public UPDATE = updateSuccessStory; 
    public DELETE = deleteSuccessStory; 
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

    public READ = SuccessStoryTranslationQuery;
    public CREATE = createSuccessStoryTranslation;
    public UPDATE = updateSuccessStoryTranslation;
    public DELETE = deleteSuccessStoryTranslation;
}