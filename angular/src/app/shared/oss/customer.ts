import { Table } from './table';

export class Customer extends Table {
    public constructor(){
        super();
    }

    title: string;
    url: string;
    contact_name : string;
    contact_email : string;
    contact_phone : string;
    address: string;
    address2: string;
    zip: number;
    city: string;
    description: string;
    isClientOf: number[];
    references: number[];
}