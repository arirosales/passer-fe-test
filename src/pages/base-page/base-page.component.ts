import { Component, ChangeDetectorRef, Input } from '@angular/core';

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

  // Load data from the table of occupations
  dataSourcep: any[] = [];
  // Gets its name from the occupations
  getNames : string[] = [];
  // Controls the change of action
  option: string = '';


  // Autocomplete variables
  searchText: string = '';
  filteredOptions: any[] = [];

 
  // In the following task is functional
  filterOptions() {
    this.filteredOptions = this.dataSourcep.filter(option =>
      option.name.toLowerCase().includes(this.searchText.toLowerCase())
    );
  } 
  // In the following task is functional
  onAutocompleteSelected(event: any) {
    console.log('Option selected:', event.option.value);
  }
  // In the following task is functional
  displayFn(option: any): string {
    return option && option.name ? option.name : '';
  }
  // In the following task is functional
  onSearchTextChange() {
    this.filterOptions();
  }
  
  // Updates the option variable if the action property has any events
  onTabChange(event: { action: string }) {
    this.option = event.action;
  }

  // UpdateS dropDownListOptions in case the array has a new dataset
  onDataChange(data: any[]) {
    this.dropDownListOptions = data;
    this.getNames=data;
    
  
  }
  
 



}