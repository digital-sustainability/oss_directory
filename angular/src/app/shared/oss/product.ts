import { Table, TABLES } from './table';

export class Product extends Table{
    table_name : TABLES = TABLES.PRODUCT;

    public constructor(){
        super();
    }
    
    id: number;
    title: string;
    
    deserialize(input) : Product {
        let product : Product = new Product();
        product.id = input.id;
        product.title = input.title;
        return product;
    }
}