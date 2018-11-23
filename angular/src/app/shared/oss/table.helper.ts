import { Table } from './table';

export class TableHelper{
    
    public static deserialize(input, t : Table): Table 
    {
      let table = this.createCopy(t);
      for (let prop in input)
      {
        if (input[prop].constructor == Array) //arrays contain associations
        { 
          table[prop] = input[prop].map(a => a.id); //only put id into array
        } 
        else 
        {
          table[prop] = input[prop];
        }
      }
      return table;
    }

    public static createCopy(table : Table) : Table 
    {
      return Object.create(table);
    }

    public static addAssociation(
      table : Table, 
      association : string, 
      f : Table) 
    {
      table[association].push(f.id);
    }

    public static removeAssociation(
      table : Table, 
      association : string, 
      f : Table) 
    {
      let list : number[] = table[association];
      let index = list.indexOf(f.id);
      if (index > -1) 
      {
        list.splice(index, 1);       
      }
    }
}