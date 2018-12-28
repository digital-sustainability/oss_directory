import { RequestService } from "./request.service";
import { ApiData } from "./api-data";
import { Deserializer } from "./deserializer";
import { Observable, observable } from "rxjs";

export class Manipulator extends ApiData {

    constructor(
        private requestService : RequestService)
    {
        super();
    }

    //TODO: what if api responses with an error who handles it?

    public create(){
        let observable = this.requestService.create(this);
        observable.subscribe();
    }

    public read() : Observable<any> {
        return this.requestService.read(this);
    }

    public update(){
        let observable = this.requestService.update(this);
        observable.subscribe();
    }

    public delete(){
        let observable = this.requestService.delete(this);
        observable.subscribe();
    }
}