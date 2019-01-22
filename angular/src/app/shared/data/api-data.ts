import { Deserializer } from "./deserializer";

export abstract class ApiData {

    public input : any;
    public id : string;

    public createdAt;
    public updatedAt;

    constructor(input? : any){
        if (input) this.deserialize(input);
    }

     //class name corresponds with db model!
    public getName() : string 
    {
        return this.constructor.name.toLowerCase();
    }

    abstract setIdentifier(id : string); 
    abstract getIdentifier() : string;

    protected abstract _deserialize(input : any) : ApiData;
    public deserialize(input : any) : ApiData {
      Deserializer.deserialize(this, input);
      return this._deserialize(input);
    };

    protected abstract _serialize() : any;
    public serialize() : any {
      this.input = JSON.stringify(this); //update input
      let result = this._serialize(); //modify the input (e.g. place ids instead of objects)
      return Deserializer.serialize(result); //remove any objects from the result such that we can send it to the api
    }
    abstract isValid() : boolean;
}