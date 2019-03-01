import { Mutation } from "../graphql/mutation";
import { Query } from "../graphql/query";
import { Organisation } from "./organisation";
import { DataTypes } from "./types";
import { Deserializer } from "../data/deserializer";
import { ApiData} from "../data/api-data";
import { Status } from "./status";

export class Vendor extends Organisation {

    website      : string | Status = Status.Empty;
    locations    : string | Status = Status.Empty;
    employee_num : number | Status = Status.Empty;
    
    products        : ApiData[] | Status = Status.Empty;
    success_stories : ApiData[] | Status = Status.Empty;
    communities     : ApiData[] | Status = Status.Empty;

    public deserialize(input : any){
        super.deserialize(input);
        
        this.products = Deserializer.deserializeAll(this.products, this.factory, DataTypes.VendorServices);
        this.communities = Deserializer.deserializeAll(this.communities, this.factory, DataTypes.Community);
        this.success_stories = Deserializer.deserializeAll(this.success_stories, this.factory, DataTypes.SuccessStory);

        return this;
    }

    public read()  : string { return Query.Vendor; }
    public create(): string { return Mutation.createVendor; }
    public update(): string { return Mutation.updateVendor; }
    public delete(): string { return Mutation.deleteVendor; }
}

export class VendorServices extends ApiData {

    service_type : string | Status = Status.Empty;
    product : ApiData | Status = Status.Empty;

    public deserialize(input : any){
        Deserializer.deserialize(this, input);

        let new_product = this.factory.create(DataTypes.Product);
        this.product = Deserializer.deserialize(new_product, this.product);

        return this;
    }

    public read()  : string { return Query.Vendor; }
    public create(): string { return Mutation.createVendor; }
    public update(): string { return Mutation.updateVendor; }
    public delete(): string { return Mutation.deleteVendor; }

}