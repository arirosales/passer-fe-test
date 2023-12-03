import { Component, Output, OnInit, EventEmitter } from '@angular/core';
import { GeneralMethodsService } from '../../endpoints/catalogs.connections';
import { Country } from 'src/models/catalogs';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})

export class CountryComponent implements OnInit {

  // Enables communication with the components 
  @Output() countriesDataChange: EventEmitter<string[]> = new EventEmitter<string[]>();

  @Output() countriesDataTable: EventEmitter<Country[]> = new EventEmitter<Country[]>();

  // Necessary to consume the get
  constructor(private catalogService: GeneralMethodsService) { }

  // Every time the component is called, the get function also called
  ngOnInit(): void {
    this.getCountries();
  }

  // This function is used to emit an event with the name of the countries
  async getCountries() {
    try {
      const response = await this.catalogService.getCountries();
      if (response.success) {
        const countriesName = response.data.map(country => country.name);
        this.countriesDataChange.emit(countriesName);
        const countries = response.data.map(country => ({
          name: country.name,
          sugefCode: country.sugefCode, 
          riskScore: country.riskScore}
          )as Country);
        this.countriesDataTable.emit(countries)
        
      }
    } catch (error) {
      console.error('Error fetching countries:', error);
    }
  }
}

