import { Table, TABLES } from './table';

export class Customer extends Table {
    table_name : TABLES = TABLES.CUSTOMER;

    public constructor(){
        super();
    }

    id: number;
    title: string;
    url: string;


    deserialize(input) : Customer{
        let customer : Customer = new Customer();
        customer.id = input.id;
        customer.title = input.title;
        customer.url = input.url;
        return customer;
    }
}