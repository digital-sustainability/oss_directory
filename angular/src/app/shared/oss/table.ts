import { Serializable } from './serializable'; 

export class TableWrapper implements Serializable<Table>{

    private table : Table;

    public constructor(table : Table){
        this.table = table;
    }

    public deserialize(input): Table {
        this.table = this.getNewEntry();
        for (let prop in input){
            if (input[prop].constructor == Array){ //arrays contain associations
                this.table[prop] = input[prop].map(a => a.id); //only put id into array
            } else {
                this.table[prop] = input[prop];
            }
        }
        return this.table;
    }

    public getEntry() : Table {
        return this.table;
    }

    public getNewEntry() : Table {
        return Object.create(this.table);
    }

    //class name has to correspond with db table name!!
    public getName() : string {
        return this.table.constructor.name;
    }

    public getId() : number {
        return this.table.getId();
    }

    public addAssociation(name : string, f : Table) {
        this.table[name].push(f.getId());
    }

    public removeAssociation(name : string, f : Table) {
        let list : number[] = this.table[name];
        let index = list.indexOf(f.getId());
        if (index > -1) {
            list.splice(index, 1);
        }
    }
}

export class Table {

    //should not been accessed directly
    private id : number;
    private created_at;
    private updated_at;

    protected constructor(){}

    public getId() : number {
        return this.id;
    }
}
