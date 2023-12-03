import { Component } from '@angular/core';

@Component({
  selector: 'app-base-page',
  templateUrl: './base-page.component.html',
  styleUrls: ['./base-page.component.scss']
})
export class BasePageComponent {

  // Completes the list of the 3 required buttons
  tabsList = [
    { name: 'Ocupaciones', action: 'ocupaciones' },
    { name: 'Países', action: 'paises' },
    { name: 'Identificaciones', action: 'identificaciones' },
  ];

  // List 
  dropDownListOptions: any[] = [];
  // Controls the change of action
  option: string = '';

  // Updates the option variable if the action property has any events
  onTabChange(event: { action: string }) {
    this.option = event.action;
  }

  // UpdateS dropDownListOptions in case the array has a new dataset
  onDataChange(data: any[]) {
    this.dropDownListOptions = data;
 
  }

}