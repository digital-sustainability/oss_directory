import { RequestService } from "./request.service";
import { ApiData } from "./api-data";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Deserializer } from "./deserializer";

export class ApiDataProxy {

    constructor(private req : RequestService, private _data : ApiData){
    }

    //TODO: what if api responses with an error who handles it?

    public create(){
        return this.req.create(this._data);}

    public read() : Observable<any> {
        let obs = this.req.read(this._data);
        let type = this._data.getName()
        return obs.pipe(map(data => 
            {
                if (data.id) //if single entry is returned
                {
                    let apidata = Deserializer.createNew(type);
                    return Deserializer.deserialize(apidata, data);
                } 
                else //if a list is returned
                {
                    return data.map(item => {
                        let apidata = Deserializer.createNew(type);
                        return Deserializer.deserialize(apidata, item);
                    })
                }
            }
        )
        );
    }

    public update(){
        return this.req.update(this._data);}

    public delete(){
        return this.req.delete(this._data);}

    public data() : ApiData{
        return this._data;}
}