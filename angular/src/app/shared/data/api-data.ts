import { Deserializer } from './deserializer';
export class ApiData {

    constructor(input? : any){
        Deserializer.deserialize(input, this);
    }
}