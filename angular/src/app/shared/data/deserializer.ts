import { ApiData } from "./api-data";
import { DataTypes } from "../model/types";
import { Factory } from "../model/factory.interface";
import { Status } from "../model/status";

export class Deserializer{

    /**
     * @param data 
     * @param input 
     */
    public static deserialize(data : ApiData | Status.Empty, input : any) {
        if (data == Status.Empty) return Status.Empty;
        for (let prop in input){

            data[prop] = input[prop];
        }
        return data;
    }

    public static deserializeAll(
        list : any[] | Status, 
        factory : Factory, 
        type : DataTypes) 
        : ApiData[] | Status
    {
        if (list == Status.Empty) return Status.Empty;

        let new_list = [];
        for (let x of list)
        {
            let t = factory.create(type);
            new_list.push(t.deserialize(x));
        }
        return new_list;
    }
}
