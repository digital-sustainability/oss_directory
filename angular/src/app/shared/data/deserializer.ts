import { ApiData } from "./api-data";

export class Deserializer{

    /**
     * @param data 
     * @param input 
     */
    public static deserialize(data : ApiData, input : any) {
        data.input = input;
        for (let prop in input){
            
            data[prop] = input[prop];
        }
        return data;
    }

    public static serialize(data : ApiData) : any {
        for (let prop in data){
            if (typeof(data[prop]) == 'object'){ //not the best way
                delete data[prop]; //if the identifier is inside another table entry then the identifier will be removed as well!
            }
        }
    }
}