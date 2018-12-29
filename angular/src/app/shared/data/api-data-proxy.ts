import { RequestService } from "./request.service";
import { ApiData } from "./api-data";
import { Observable } from "rxjs";

export class ApiDataProxy {

    constructor(private req : RequestService, private data : ApiData){
    }

    //TODO: what if api responses with an error who handles it?

    public create(){
        return this.req.create(this.data);}

    public read() : Observable<any> {
        return this.req.read(this.data);}

    public update(){
        return this.req.update(this.data);}

    public delete(){
        return this.req.delete(this.data);}
}