import { NgModule } from '@angular/core';
import {OcupationComponent } from './ocupation/ocupation.component'
import { CountryComponent } from './country/country.component'
import { IdentificationTypeComponent } from './identification-type/identification-type.component';
import { OcupationTableComponent } from './components/ocupation-table/ocupation-table.component';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import {MatTableModule} from '@angular/material/table';
import { CommonModule } from '@angular/common';


// This component is created to allow the communication of the pages

@NgModule({
  declarations: [   
    OcupationComponent,
    CountryComponent,
    IdentificationTypeComponent,
    OcupationTableComponent,
   
  ],
  exports: [
    OcupationComponent, 
    CountryComponent,
    IdentificationTypeComponent,
    OcupationTableComponent,
  
  ],
  imports:[
    MatInputModule,
    MatAutocompleteModule,
    MatTableModule,
    CommonModule
  ]
})
export class pagesModule {}
