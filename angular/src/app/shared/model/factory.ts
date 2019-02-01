import { Organisation } from "./organisation";
import { ApiData } from "../data/api-data";
import { Client } from "./client";
import { Product } from "./product";
import { SuccessStory } from "./success_story";
import { Vendor } from "./vendor";
import { Community } from "./community";
import { Category } from "./category";
import { View } from "./view";
import { Language } from "./language";

export class Factory{

    public static createNew(name : string) : ApiData {
        name = name.toLowerCase();
        switch (name) {
            case DataTypes.Client:
                return new Client();
            case DataTypes.Product:
                return new Product();
            case DataTypes.SuccessStory:
                return new SuccessStory();
            case DataTypes.Vendor:
                return new Vendor();
            case DataTypes.Organisation:
                return new Organisation();
            case DataTypes.Community:
                return new Community();
            case DataTypes.Category:
                return new Category();
            case DataTypes.View:
                return new View();
            case DataTypes.Language:
                return new Language();
            default:
                return null; //throw error
        }
    }
} 

export enum DataTypes {

    Vendor = "vendor",
    Client = "client",
    Organisation = "organisation",
    Community = "community",
    SuccessStory = "successstory",
    Product = "product",
    Category = "category",
    View = "view",
    Language = "language",
}