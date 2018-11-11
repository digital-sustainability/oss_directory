import { Table, TABLES } from './table';

export class Firm extends Table {
    
    table_name : TABLES = TABLES.FIRM;

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

    deserialize(input) : Table{
        let firm : Firm = new Firm();
        firm.id = input.id;
        firm.title = input.title;
        firm.url = input.url;
        firm.contact_name = input.contact_name;
        firm.contact_email = input.contact_email;
        firm.contact_phone = input.contact_phone;
        firm.address = input.address;
        firm.address2 = input.address2;
        firm.zip = input.zip;
        firm.city = input.city;
        firm.description = input.description;
        return firm;
    }
}