import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-countries-table',
  templateUrl: './countries-table.component.html',
  styleUrls: ['./countries-table.component.scss']
})
export class CountriesTableComponent {

  columns: any[] = ['name', 'sugefCode', 'riskScore'];
  dataSource: any[] = [];
  @Input() searchText: string = ''
  filteredDataSource: any[] = [];


  onGetCountry(data: any[]) {
    this.dataSource = data;
  }
 
  
}
