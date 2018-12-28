# Modules

This folder holds different "feature" modules.
The idea is to keep user interactions divided in multiple modules.
Each module will only be "sent" to the client if he actually routes to it.
That means a user does not have the full app on his device if he does not use it.

For example if someones just using components from the viewer module he does not need any functionality from the editor module.

Check app-routing, viewer-routing and editor-routing for more insight on how it works.

Upsides:
+ Keeping the client as thin as possible
+ Making it easier to manage the application by dividing it in multiple parts
+ Dividing router functionalities for a better readability
+ Providing services only in the needed scope

Downsides:
- More Files
- Having to know where to register new parts and components