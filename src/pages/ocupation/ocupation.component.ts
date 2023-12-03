import { Component, Output, OnInit, EventEmitter } from '@angular/core';
import { GeneralMethodsService } from '../../endpoints/catalogs.connections';


@Component({
  selector: 'app-ocupation',
  templateUrl: './ocupation.component.html',
  styleUrls: ['./ocupation.component.scss']
})

export class OcupationComponent implements OnInit {

  // Enables communication with the components 
  @Output() ocupationsDataChange: EventEmitter<string[]> = new EventEmitter<string[]>();

  // Necessary to consume the get
  constructor(private catalogService: GeneralMethodsService) { }

  // Every time the component is called, the get function also called
  ngOnInit(): void {
    this.getOccupations();
  }

  // This function is used to emit an event with the name of the occupancies
  async getOccupations() {
    try {
      const response = await this.catalogService.getOccupations();
      if (response.success) {
        const ocupationNames = response.data.map(ocupation => ocupation.name);
        this.ocupationsDataChange.emit(ocupationNames);
      }
    } catch (error) {
      console.error('Error fetching occupations:', error);
    }
  }
}

