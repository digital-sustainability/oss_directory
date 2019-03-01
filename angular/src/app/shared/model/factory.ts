import { ApiData } from "../data/api-data";
import { Client } from "./client";
import { Product, ProductTranslation } from "./product";
import { SuccessStory, SuccessStoryTranslation } from "./success_story";
import { Vendor, VendorServices } from "./vendor";
import { Community } from "./community";
import { Category } from "./category";
import { OrganisationTranslation } from "./organisation";
import { Address } from "./address";
import { DataTypes } from "./types";

export class Factory implements Factory {

    public static create(name : string) : ApiData {
        name = name.toLowerCase();
        switch (name) {
            case DataTypes.Client:
                return new Client(this);
            case DataTypes.Product:
                return new Product(this);
            case DataTypes.SuccessStory:
                return new SuccessStory(this);
            case DataTypes.Vendor:
                return new Vendor(this);
            case DataTypes.Community:
                return new Community(this);
            case DataTypes.Category:
                return new Category(this);
            case DataTypes.OrganisationTranslation:
                return new OrganisationTranslation(this);
            case DataTypes.ProductTranslation:
                return new ProductTranslation(this);
            case DataTypes.SuccessStoryTranslation:
                return new SuccessStoryTranslation(this);
            case DataTypes.Address:
                return new Address(this);
            case DataTypes.VendorServices:
                return new VendorServices(this);
            default:
                return null; //throw error
        }
    }
} 

