import { NgModule } from '@angular/core';
import {OcupationComponent } from './ocupation/ocupation.component'

// This component is created to allow the communication of the pages

@NgModule({
  declarations: [   
    OcupationComponent
  ],
  exports: [
    OcupationComponent
  ], 
})
export class pagesModule {}
