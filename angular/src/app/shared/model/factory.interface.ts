import { ApiData } from "../data/api-data";

export interface Factory {
    create(name : string) : ApiData; 
}