import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { Capital } from '../interfaces/capital.interface';
import { Country } from '../interfaces/pais.interface';


@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrlPais: string = 'https://restcountries.com/v3.1';
  private apiUrlCapital: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) { }

  //Consume el api de pais por nombre
  buscarPais(termino: string): Observable<Country[]> {
    //Url de llamada al api de buscar por nombre
    const url = `${this.apiUrlPais}/name/${termino}`;
    return this.http.get<Country[]>(url);
  }

  
}


