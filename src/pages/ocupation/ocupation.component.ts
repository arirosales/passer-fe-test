import { Component, Output, OnInit, EventEmitter } from '@angular/core';
import { GeneralMethodsService } from '../../endpoints/catalogs.connections';
import { Ocupation } from 'src/models/catalogs';


@Component({
  selector: 'app-ocupation',
  templateUrl: './ocupation.component.html',
  styleUrls: ['./ocupation.component.scss']
})

export class OcupationComponent implements OnInit {
  // Enables communication with the components  to send a string list
  @Output() sendNames: EventEmitter<string[]> = new EventEmitter<string[]>();

  // Enables communication with the components  to send the get 
  @Output() ocupationsTable: EventEmitter<Ocupation[]> = new EventEmitter<Ocupation[]>();

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
        const ocupationName = response.data.map(ocupation => ocupation.name);
        this.sendNames.emit(ocupationName);
          const ocupationes = response.data.map(ocupation => ({
          name: ocupation.name,
          sugefCode: ocupation.sugefCode, 
          riskScore: ocupation.riskScore,
          code: ocupation.code}
          )as Ocupation);
        this.ocupationsTable.emit(ocupationes);
        console.log("envia la lista del hijo",this.ocupationsTable)
      }
    } catch (error) {
      console.error('Error fetching occupations:', error);
    }
  }
}

