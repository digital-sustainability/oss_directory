import { createAddress, updateAddress, deleteAddress } from "../graphql/mutation";
import { AddressQuery } from "../graphql/query";
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

    public deserialize(input : any){ return Deserializer.deserialize(this, input); }

    public  READ = AddressQuery;
    public  CREATE = createAddress;
    public  UPDATE = updateAddress; 
    public  DELETE = deleteAddress;



    
}