import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class RegionService {

  private apiUrlRegion: string = 'https://restcountries.com/v2';
  constructor(private http: HttpClient) { }


  buscarRegion(id: string): Observable<Country[]> {
    const url = `${this.apiUrlRegion}/regionalbloc/${id}`;
    return this.http.get<Country[]>(url);
  }
}
