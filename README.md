# AngularOffers

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.2.

This application allows the user to navigate between pages that show monthly offers and all the available offers  and displays the details of the offer on selection.

1.  It has 3 components:
    --> offers: Displays all the available offers. 
    --> monthly-special-offers: Displays the offers specific to the month.
    --> offer-details: Displays the offer details - Offer Id and Offer Name 

2. offer.service is used to fetch the mock data to show available/monthly offers. It is injected into the components to fetch data as      required. 
3. Offer class is exported and used across the components and has the basic structure for each offer.
4. app-routing.module.ts has all the routing logic. Has the paths to the different components that need to be loaded on navigation.
5. AppComponent is the bootstrapped module and is the root component that is loaded.



## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
