import { Component, Output , Input, ViewChild } from '@angular/core';
import { Ocupation } from '../../models/catalogs';
import {OcupationComponent} from '../ocupation/ocupation.component'
@Component({
  selector: 'app-base-page',
  templateUrl: './base-page.component.html',
  styleUrls: ['./base-page.component.scss']
})
export class BasePageComponent {
   // ViewChild para obtener una referencia al componente OcupationComponent
   @ViewChild(OcupationComponent, { static: false }) ocupationComponent: OcupationComponent | undefined;
  // Completes the list of the 3 required buttons
  tabsList = [
    { name: 'Ocupaciones', action: 'ocupaciones' },
    { name: 'Países', action: 'paises' },
    { name: 'Identificaciones', action: 'identificaciones' },
  ];

  // Lists 
  @Input() activeTabAction: string = '';
  @Input() occupations: Ocupation[] = [];
  dropDownListOptions: any[] = [];

 

  ngOnChanges(): void {
    if (this.activeTabAction === 'ocupaciones' && this.occupations) {
      this.dropDownListOptions = this.occupations.map((occupation) => occupation.name);
    }
  }


  // Método que se ejecutará cuando se cambie la pestaña
  onTabChange(event: any): void {
    this.activeTabAction = event.action;
    if (event.occupations) {
      this.occupations = event.occupations;
    }
     // Llamada al método getOccupations en OcupationComponent
     if (this.activeTabAction === 'ocupaciones') {
      // Asegúrate de tener una referencia al componente hijo, por ejemplo, usando una referencia ViewChild
      // Aquí estoy asumiendo que tienes una referencia llamada 'ocupationComponent' en tu clase BasePageComponent.
   
      this.ocupationComponent?.getOccupations();
    }

    this.fetchDataForActiveTab();
  }
  // Loads the corresponding endpoint 
  private fetchDataForActiveTab(): void {
    try {
      switch (this.activeTabAction) {
        case 'ocupaciones':

          break;
        case 'paises':

          break;
        case 'identificaciones':

          break;
        default:
          break;
      }
    } catch (error) {
      console.error('Error fetching data for active tab:', error);
    }
  }


}