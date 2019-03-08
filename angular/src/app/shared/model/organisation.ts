
import { OrganisationTranslationQuery } from "../graphql/query";
import { createOrganisationTranslation, updateOrganisationTranslation, deleteOrganisationTranslation } from "../graphql/mutation";
import { ApiData} from "../data/api-data";
import { Translation, TranslationHolder } from "./translation.interface";
import { DataTypes } from "./types";
import { Deserializer } from "../data/deserializer";
import { Status } from "./status";

export abstract class Organisation extends ApiData implements TranslationHolder {
    
    title       : string    | Status = Status.Empty;
    logo        : string    | Status = Status.Empty;
    address     : ApiData   | Status = Status.Empty;
    translations: OrganisationTranslation[] | Status = Status.Empty;
    users       : ApiData[] | Status = Status.Empty;
    view        : ApiData   | Status = Status.Empty;

    currentTranslation : OrganisationTranslation | Status = Status.Empty;;


    public set identifier(id : string | Status.Empty ) { this.title = id; }
    public get identifier() : string | Status.Empty { return this.title; }

    public set language(lang : string | Status.Empty) { } //set the currentTranslation field if exists
    public get language() : string | Status.Empty 
    { 
        return this.currentTranslation != Status.Empty ? this.currentTranslation.language : Status.Empty;
    }

    public deserialize(input : any) : ApiData {
        Deserializer.deserialize(this, input);
        let address = this.factory.create(DataTypes.Address);
        this.address = this.address != Status.Empty ? address.deserialize(this.address) : Status.Empty;

        this.translations = Deserializer.deserializeAll(
            this.translations, 
            this.factory, 
            DataTypes.OrganisationTranslation) as OrganisationTranslation[];
        
        //set current language based on global language field (test if that works correctly)

        return this;
    }

}

export class OrganisationTranslation extends ApiData implements Translation {

    language    : string | Status = Status.Empty;
    description : string | Status = Status.Empty;
    contact     : string | Status = Status.Empty;
    claim       : string | Status = Status.Empty;

    public deserialize(input : any){ 
        return Deserializer.deserialize(this, input); }

    public READ = OrganisationTranslationQuery;
    public CREATE = createOrganisationTranslation;
    public UPDATE = updateOrganisationTranslation;
    public DELETE = deleteOrganisationTranslation;

}