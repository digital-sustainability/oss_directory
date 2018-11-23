# Request

TODO: Descritption

## Usage

```JavaScript
//create a table
let table_entry = new Table();

//modifiy your table object e.g. add search parameters
table_entry.title = "my_title";
table_entry.author = "steve";

//create a request
let request = new Request();

//modify your request
request.skip = 10;
request.limit = 5;

//create a request handler and provide a request service
//e.g. our http service
let handler = new RequestHandler(httpService);

//then get an observable request object
let c = handler.create(request);
let r = handler.read(request);
let u = handler.update(request);
let d = handler.delete(request);

let c = c.pipe(
        //do something like mapping
);

//then send your request
c.subscribe();
``` 


## Search

TODO:

## Update

TODO:

## Delete

TODO:

## Associations

TODO: