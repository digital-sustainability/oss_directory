export class Table {

    //should not been accessed directly
    private created_at;
    private updated_at;

    public id : number;

    protected constructor(){}


    //class name corresponds with db model!
    public getName() : String 
    {
        return this.constructor.name;
    }
}
