import { Component, Output, OnInit, EventEmitter } from '@angular/core';
import { GeneralMethodsService } from '../../endpoints/catalogs.connections';
import { TypeId } from 'src/models/catalogs';


@Component({
  selector: 'app-identification-type',
  templateUrl: './identification-type.component.html',
  styleUrls: ['./identification-type.component.scss']
})
export class IdentificationTypeComponent {
 // Enables communication with the components 
 @Output() identificationDataChange: EventEmitter<string[]> = new EventEmitter<string[]>();

 @Output() identificationDataTable: EventEmitter<TypeId[]> = new EventEmitter<TypeId[]>();

 // Necessary to consume the get
 constructor(private identificationService: GeneralMethodsService) { }

 // Every time the component is called, the get function also called
 ngOnInit(): void {
   this.getIdentification();
 }

 // This function is used to emit an event with the name of the identification
 async getIdentification() {
   try {
     const response = await this.identificationService.getIdentification();
     if (response.success) {
       const identificationName = response.data.map(TypeId => TypeId.name);
       this.identificationDataChange.emit(identificationName);
     }
   } catch (error) {
     console.error('Error fetching countries:', error);
   }
 }
}
