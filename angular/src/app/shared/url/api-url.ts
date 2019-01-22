import { Injectable } from '@angular/core';
import { ApiData } from "../data/api-data";
import { environment } from "../../../environments/environment";

@Injectable({
    providedIn : 'root',
})

export class ApiUrl {

    public create(data : ApiData) : string {
        return environment.apiURL + "api/" + data.getName();
    }

    public update(data : ApiData) : string {
        return environment.apiURL + "api/" + data.getName() + "/" + data.id;
    }

    public find(data : ApiData) : string {
        if (data.getIdentifier()) return this.findOne(data);
        return environment.apiURL + "api/" + data.getName();
    }

    public findOne(data : ApiData) : string {
        return environment.apiURL + "api/" + data.getName() + "/" + data.getIdentifier();
    } 

    public delete() : string {
        return ;
    }

    public search() : string {
        return ;
    }
}