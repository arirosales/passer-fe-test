import { NgModule } from '@angular/core';
import {OcupationComponent } from './ocupation/ocupation.component'
import { CountryComponent } from './country/country.component'

// This component is created to allow the communication of the pages

@NgModule({
  declarations: [   
    OcupationComponent,
    CountryComponent
  ],
  exports: [
    OcupationComponent, 
    CountryComponent
  ], 
})
export class pagesModule {}
