import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Ocupation } from 'src/models/catalogs';

import { MatTableModule } from '@angular/material/table';


@Component({
  selector: 'app-ocupation-table',
  templateUrl: './ocupation-table.component.html',
  styleUrls: ['./ocupation-table.component.scss']
})

// This component consists of creating a table of occupations
// and filling it with the data sent from the occupations component.
export class OcupationTableComponent {
  columns: any[] = ['name', 'sugefCode', 'riskScore', 'code'];
  dataSource: any[] = [];
  ocupations: Ocupation[] = [];

  onGetOcupation(data: any[]) {
    this.dataSource = data;
    console.log("tablsaaaaa", this.dataSource )
  }
  


  // Función para actualizar los datos
}