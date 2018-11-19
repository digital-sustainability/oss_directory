import { Table } from './table';
import { Firm } from './firm';
import { Customer } from './customer';

export class Reference extends Table {

    public constructor(){
        super();
    }

    title: string;
    url: string;
    description: string;

    products : number[];
    customer;
    firm;
}