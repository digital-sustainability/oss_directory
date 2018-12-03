# Table

TODO: Description

## Usage
```JavaScript
//create a new table entry
let table = new Table();


/* deserialize json object into a table e.g. data from RESTful api
*  this returns a new table instance with the same table type (class)
*  associations will be represented as an array with ids */
let deserialized_table =TableHelper.deserialize(input, table);

//You can add and remove an association by table
addAssociation(table, associationName, toAssociateWith);
removeAssociation(table, associationName, toRemoveAssociation);
```
