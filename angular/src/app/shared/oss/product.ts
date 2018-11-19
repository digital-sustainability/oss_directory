import { Table } from './table';

export class Product extends Table{
    
    public constructor(){
        super();
    }
    
    title: string;
    url: string;
    category_uid: number;
    description: string;
    references: number[];
    provider: number[];
    
}