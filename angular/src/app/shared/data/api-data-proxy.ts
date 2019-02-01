import { ApiData } from "./api-data";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { HttpService } from "../sails/http.service";
import { ApiUrl } from "../url/api-url";
import { Factory } from "../model/factory";

/**
 * This class encapsulates a data entry such that any data change does not affect the functionality of this class.
 */
//TODO: Make this a service 
export class ApiDataProxy {

    constructor(
			private http : HttpService, 
			private url : ApiUrl){
    }

    //TODO: what if api responses with an error who handles it?

    public create(data : ApiData)
    {
      if (!data.isValid()){
        console.log("could not create");
      }
      let url = this.url.create(data);
      let create = data.serialize();
			return this.http.post(url, create);
		}


    public read(data : ApiData) : Observable<any> {
			let url = this.url.find(data);
      let obs = this.http.get(url);
      let type = data.getName();
      return obs.pipe(map(data => 
        {
          if (data.id){
            let apidata = Factory.createNew(type);
            return apidata.deserialize(data);
          }
					return data.map(item => 
					{
            let apidata = Factory.createNew(type);
            return apidata.deserialize(item);
        	})
        })
      );
    }

    public update(data : ApiData){
      if (!data.isValid()){
        console.log("could not update");
      }
      let url = this.url.update(data);


      let update = data.serialize();

      return this.http.patch(url, update);
    }

    public delete(data : ApiData){
			let url = this.url.delete();
      return this.http.delete(url, data);}

    public addTo(){
      //TODO: 
    }
}