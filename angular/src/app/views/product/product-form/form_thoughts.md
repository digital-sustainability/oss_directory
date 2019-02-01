# Form

There are multiple strategies to create input interactions with angular 2^:
+ Reactive
+ Dynamic
+ Template-driven

All with different advantages and disadvantages as explained here:  
https://angular.io/guide/forms-overview

## Reactive Forms
The fact that our models already implement a deserialize method allows us to implement 
reactive forms without struggle.
(Reactive forms create a seperate input object and we have to manualy transform it to our existing entry)
But since our form views can get pretty big there would be a lot of code to write for every input (e.g. every field needs an html element as well as a FormControl object).

Because of that i suggest not to use this type of form. 

## Dynamic Forms

Dynamic forms would make the application adaptable to a lot of different use cases very fast.
But we have to consider the initial amount of work to generate a sustainable dynamic form generation. Due to very difficult and unique types of input forms it would take a lot of time until delivery.
As of this stage in development i would not recommend the dynamic-driven forms since forms are only on a prototype level and under frequent change (Re-evaluate that later on).

## Template-driven Forms

Last but not least we have template-driven forms. Directly connected to our models they allow us to create very fast and easy forms. A user modifies directly our object we then can send directly to the database. Validation can be checked natively or with the ng directives.


# Stepper

Right now i tried to use a stepper to split up different parts of the create/update process.
This way the user could get a better overview of the process itself.
I will explain possible use cases here since it is not that good explained in the documentation.

## Validation

As we do not use reactive forms we can not provide an Form Object that tells the stepper if a step is valid or not.

But we can make a form and generate the angular directive (alternatively we can use ngForm directly)

`<form #myForm='ngForm'></form>`

If every input inside the form is valid only then the form is valid as well.

Then we can set the stepControl option

`<md-step [stepControl]="myForm"></md-step>`

But make sure to set the stepper to linear.

`<md-vertical-stepper linear>`


## OnStepChange

Example: We want to send an update to our server after each step such that progress could be restored.

We can use the selectionChange event inherited from the CdkStepper

` <md-horizontal-stepper (selectionChange)="doSomething($event)"></md-horizontal-stepper> `


