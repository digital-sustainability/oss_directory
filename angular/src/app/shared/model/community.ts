
import { CommunityQuery } from "../graphql/query";
import { createCommunity, updateCommunity, deleteCommunity } from "../graphql/mutation";
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

    public READ = CommunityQuery; 
    public CREATE = createCommunity; 
    public UPDATE = updateCommunity; 
    public DELETE = deleteCommunity; 

}