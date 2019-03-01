
import { Query } from "../graphql/query";
import { Mutation } from "../graphql/mutation";
import { Organisation } from "./organisation";
import { ApiData } from "../data/api-data";
import { Deserializer } from "../data/deserializer";
import { DataTypes } from "./types";
import { Status } from "./status";

export class Community extends Organisation {

    website : string    | Status = Status.Empty;
    vendors : ApiData[] | Status = Status.Empty;
    clients : ApiData[] | Status = Status.Empty;
    products: ApiData[] | Status = Status.Empty;

    public deserialize(input : any){
        super.deserialize(input);
        this.vendors = Deserializer.deserializeAll(this.vendors, this.factory, DataTypes.Vendor);
        this.clients = Deserializer.deserializeAll(this.clients, this.factory, DataTypes.Client);
        this.products = Deserializer.deserializeAll(this.products, this.factory, DataTypes.Product);
        return this;
    }

    public read() : string { return Query.Community; }
    public create() : string { return Mutation.createCommunity; }
    public update() : string { return Mutation.updateCommunity; }
    public delete() : string { return Mutation.deleteCommunity; }

}