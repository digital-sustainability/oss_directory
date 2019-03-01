import { Injectable } from '@angular/core';
import { ApiData} from "../data/api-data";

import { environment } from "../../../environments/environment";
import { Status } from '../model/status';

@Injectable({
    providedIn : 'root',
})

export class ApiUrl {

    public create(data : ApiData) : string {
        return environment.apiURL + "api/" + data.getName();
    }

    public update(data : ApiData) : string {
        return environment.apiURL + "api/" + data.getName() + "/" + data.uid;
    }

    public find(data : ApiData) : string {
        let findOne = this.findOne(data);
        return findOne ? findOne : environment.apiURL + "api/" + data.getName();
    }

    public findOne(data : ApiData) : string {
        if (data.identifier != Status.Empty) return environment.apiURL + "api/" + data.getName() + "/" + data.identifier;
        if (data.uid) return environment.apiURL + "api/" + data.getName() + "/" + data.uid;
    } 

    public delete() : string {
        return ;
    }

    public search() : string {
        return ;
    }
}