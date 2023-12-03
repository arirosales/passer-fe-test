import { Component } from '@angular/core';


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
  

  onGetOcupation(data: any[]) {
    this.dataSource = data;
   
  }
  



}