import { Query } from "../graphql/query";
import { Mutation } from "../graphql/mutation";
import { Organisation } from "./organisation";
import { ApiData} from "../data/api-data";
import { Deserializer } from "../data/deserializer";
import { DataTypes } from "./types";
import { Status } from "./status";

export class Client extends Organisation {

    industry        : string    | Status  = Status.Empty;
    products        : ApiData[] | Status  = Status.Empty;
    vendors         : ApiData[] | Status  = Status.Empty;
    communities     : ApiData[] | Status  = Status.Empty;
    success_stories : ApiData[] | Status  = Status.Empty;

    public deserialize(input : any){
        super.deserialize(input);
        this.products = Deserializer.deserializeAll(this.products, this.factory, DataTypes.Product);
        this.vendors = Deserializer.deserializeAll(this.vendors, this.factory, DataTypes.Vendor);
        this.communities = Deserializer.deserializeAll(this.communities, this.factory, DataTypes.Community);
        this.success_stories = Deserializer.deserializeAll(this.success_stories, this.factory, DataTypes.SuccessStory);
        return this;
    }

    public read() : string { return Query.Client; }
    public create() : string { return Mutation.createClient; }
    public update() : string { return Mutation.updateClient; }
    public delete() : string { return Mutation.deleteClient; }

}