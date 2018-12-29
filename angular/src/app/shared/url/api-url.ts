import { Injectable } from '@angular/core';
import { ApiData } from "../data/api-data";
import { environment } from "../../../environments/environment";

@Injectable({
    providedIn : 'root',
})

export class ApiUrl {

    public build(data : ApiData){
        let buffer = [];
        this.addEnvironment(buffer);
        this.addModel(buffer, data);

        return buffer.join("");
    }

    private addEnvironment(
        buffer: Array < String > ) 
    {
        buffer.push(environment.apiURL);
        buffer.push("api/");
    }

    public addModel(
        buffer: Array < String > , data : ApiData) 
    {
        buffer.push(data.getName());
        buffer.push("/");
    }

    public addId(
        buffer: Array < String > , data : ApiData) 
    {
        buffer.push(data.id + "");
        buffer.push("/");
    }

}