import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResponseOcupation, ResponseCountryList  } from '../models/response-catalogs';
@Injectable({
    providedIn: 'root',
})
export class GeneralMethodsService {
  
  private urlCatalogs: string = '';
  // EXTENTIONS
  private readonly GET_COUNTRIES = '/countries';
  private readonly GET_TYPE_ID = '/identificationTypes';
  private readonly GET_OCUPATIONS = '/occupations';

  constructor(private http: HttpClient) {
    this.urlCatalogs = environment.serverUrlCatalogs;
  }

  // Method to get occupations
  async getOccupations(): Promise<ResponseOcupation> {
    const response$ = this.http.get<ResponseOcupation>(
      this.urlCatalogs + this.GET_OCUPATIONS,
    );

    return await lastValueFrom(response$);
  }

  // Method to get countries
  async getCountries(): Promise<ResponseCountryList> {
    const response$ = this.http.get<ResponseCountryList>(
      this.urlCatalogs + this.GET_COUNTRIES,
    );

    return await lastValueFrom(response$);
  }
  
  // EXAMPLE
//   async methodExample(): Promise<typeResponse> {
//     const response$ = this.http.get<typeResponse>(
//       this.urlCatalogs + this.extention,
//     );

//     return aWait lastValueFrom(reAsponse$);
//   }
}