import { Mutation } from "../graphql/mutation";
import { Query } from "../graphql/query";
import { ApiData} from "../data/api-data";
import { Deserializer } from "../data/deserializer";
import { Status } from "./status";

export class Address extends ApiData{

    title        : string | Status = Status.Empty;
    street       : string | Status = Status.Empty;
    house_number : number | Status = Status.Empty;
    additional   : string | Status = Status.Empty;
    city         : string | Status = Status.Empty;
    zip          : number | Status = Status.Empty;
    state        : string | Status = Status.Empty;

    public deserialize(input : any) : ApiData | Status { 
        return Deserializer.deserialize(this, input); }

    public read()  : string { return Query.Address; }
    public create(): string { return Mutation.createAddress; }
    public update(): string { return Mutation.updateAddress; }
    public delete(): string { return Mutation.deleteAddress; }



    
}