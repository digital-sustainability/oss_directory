import { ProductQuery, ProductTranslationQuery } from "../graphql/query";
import { createProductTranslation, updateProductTranslation, deleteProductTranslation, createProduct, updateProduct, deleteProduct } from "../graphql/mutation";
import { ApiData } from "../data/api-data";
import { Translation, TranslationHolder } from "./translation.interface";
import { Deserializer } from "../data/deserializer";
import { DataTypes } from "./types";
import { Status } from "./status";

export class Product extends ApiData implements TranslationHolder {

    category         : ApiData | Status = Status.Empty;
    logo             : string | Status = Status.Empty;
    title            : string | Status = Status.Empty;
    links            : string | Status = Status.Empty;
    source_code_link : string | Status = Status.Empty;
    
    user            : ApiData | Status   = Status.Empty;
    translations    : ApiData[] | Status = Status.Empty;
    vendors         : ApiData[] | Status = Status.Empty;
    clients         : ApiData[] | Status = Status.Empty;
    communities     : ApiData[] | Status = Status.Empty;
    success_stories : ApiData[] | Status = Status.Empty;;
    views           : any[] | Status = Status.Empty;

    currentTranslation : ProductTranslation | Status = Status.Empty;;

    public set identifier(id : string | Status){ this.title = id; }
    public get identifier() : string | Status { return this.title; }

    public deserialize(input : any){
        Deserializer.deserialize(this, input);
        let new_category = this.factory.create(DataTypes.Category);
        this.category = this.category != Status.Empty ? new_category.deserialize(this.category) : Status.Empty;
        
        this.translations = Deserializer.deserializeAll(
            this.translations,
            this.factory,
            DataTypes.ProductTranslation) as ProductTranslation[];

        
        this.language = 'test';
        //set current language based on global language field (test if that works correctly)

        this.vendors = Deserializer.deserializeAll(this.vendors, this.factory, DataTypes.Vendor);
        this.clients = Deserializer.deserializeAll(this.clients, this.factory, DataTypes.Client);
        this.communities = Deserializer.deserializeAll(this.communities, this.factory, DataTypes.Community);
        this.success_stories = Deserializer.deserializeAll(this.success_stories, this.factory, DataTypes.SuccessStory);
        return this;
    }

    public set language(lang : string) {
        this.currentTranslation = this.translations != Status.Empty ? this.translations[0] as ProductTranslation : Status.Empty;
    } //set current language field if exists

    public READ = ProductQuery;
    public CREATE = createProduct;
    public UPDATE = updateProduct;
    public DELETE = deleteProduct;
}

export class ProductTranslation extends ApiData implements Translation{

    language    : string | Status = Status.Empty;
    description : string | Status = Status.Empty;

    public deserialize(input : any){ return Deserializer.deserialize(this, input); }

    public READ = ProductTranslationQuery; 
    public CREATE = createProductTranslation; 
    public UPDATE = updateProductTranslation;
    public DELETE = deleteProductTranslation;
}