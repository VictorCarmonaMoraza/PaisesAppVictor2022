import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class RegionService {

  private apiUrlRegion: string = 'https://restcountries.com/v2';
  constructor(private http: HttpClient) { }


  buscarRegion(region: string): Observable<Country[]> {



    const url = `${this.apiUrlRegion}/regionalbloc/${region}`;
    return this.http.get<Country[]>(url, { params: this.httpParams })
      //return this.http.get<Country[]>(url, { params: this.gethttpParams() })--->Es Valido tambien
      .pipe(
        tap(console.log)
      );
  }

  //Forma 1
  get httpParams() {
    return new HttpParams()
      .set('fields', 'name,capital,cca3,flags,population');
  }

  //Forma 2

  gethttpParams() {
    return new HttpParams()
      .set('fields', 'name,capital,cca3,flags,population');
  }
}
