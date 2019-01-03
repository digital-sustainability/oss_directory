import { ApiData } from "./api-data";
import { Client } from "../model/client";
import { Product } from "../model/product";
import { Reference } from "../model/reference";
import { Vendor } from "../model/vendor";

export class Deserializer{


    public static createNew(name : string) : ApiData {
        name = name.toLowerCase();
        switch (name) {
            case DataTypes.Client:
                return new Client();
            case DataTypes.Product:
                return new Product();
            case DataTypes.Reference:
                return new Reference();
            case DataTypes.Vendor:
                return new Vendor();
            default:
                return null; //throw error
        }
    }

    public static deserialize(data : ApiData, input : any) {
        for (let prop in input)
        {
            data[prop] = input[prop];
        }
        return data;
    }
}


export enum DataTypes {

    Vendor = "vendor",
    Client = "client",
    Reference = "reference",
    Product = "product",
}