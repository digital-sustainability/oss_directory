# Base

Each component is a view-routing component for it's own view type and routes to the right data type.  
That means each component checks what type of data is requested and loads the coresponding data view.  
E.g. We route to the url "/products" our view module loads the base list component.
That component reads the url and sees the data type "product" and loads the correct component (ProductListComponent).

Upsides: 
+ Keeping our router thin and clean
+ Enforcing a view organization:  
  Each component can be defined in two layers, a base and a specific, such that we can make every list look alike on a basic level and specify the looks as needed.
+ Making the website more flexible by not hardcoding urls.

Downsides: 

- Having to register different new components in different places (module and base component)
- Crowding the app with more components and folders
