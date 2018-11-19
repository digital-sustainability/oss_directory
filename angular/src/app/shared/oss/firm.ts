import { Table } from './table';
import { Reference } from './reference';
import { Product } from './product';
import { Customer } from './customer';

export class Firm extends Table {

    public constructor(){
        super();
    }
    
    title: string;
    url: string;
    contact_name : string;
    contact_email: string;
    contact_phone: string;
    address: string;
    address2: string;
    zip: number;
    city: string;
    description: string;

    services : number[];
    customers : number[];
    references : number[];
}