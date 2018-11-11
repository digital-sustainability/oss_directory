import { Table, TABLES } from './table';

export class Reference extends Table {
    table_name : TABLES = TABLES.REFERENCE;

    public constructor(){
        super();
    }

    id: number;
    title: string;
    url: string;
    description: string;

    deserialize(input) : Reference {
        let reference : Reference = new Reference();
        reference.id = input.id;
        reference.title = input.title;
        reference.url = input.url;
        reference.description = input.description;
        return reference;
    }
     
}