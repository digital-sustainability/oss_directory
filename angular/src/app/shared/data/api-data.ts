
export class ApiData {

    public id : string;

    constructor(input? : any){}

     //class name corresponds with db model!
    public getName() : string 
    {
        return this.constructor.name.toLowerCase();
    }
}