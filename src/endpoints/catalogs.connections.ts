import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResponseOcupation  } from '../models/response-catalogs';
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
  
  // EXAMPLE
//   async methodExample(): Promise<typeResponse> {
//     const response$ = this.http.get<typeResponse>(
//       this.urlCatalogs + this.extention,
//     );

//     return aWait lastValueFrom(reAsponse$);
//   }
}