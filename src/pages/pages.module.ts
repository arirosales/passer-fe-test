import { NgModule } from '@angular/core';
import {OcupationComponent } from './ocupation/ocupation.component'
import { CountryComponent } from './country/country.component'
import { IdentificationTypeComponent } from './identification-type/identification-type.component';
 
// This component is created to allow the communication of the pages

@NgModule({
  declarations: [   
    OcupationComponent,
    CountryComponent,
    IdentificationTypeComponent,
  ],
  exports: [
    OcupationComponent, 
    CountryComponent,
    IdentificationTypeComponent,
  ], 
})
export class pagesModule {}
