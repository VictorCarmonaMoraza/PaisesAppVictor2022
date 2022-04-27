import { RegionService } from './region.service';
import { Capital } from './../interfaces/capital.interface';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CapitalService {


  private apiUrlCapital: string = 'https://restcountries.com/v3.1';


  constructor(private http: HttpClient, private regionService:RegionService) { }




  buscarCapital(termino: string): Observable<Capital[]> {
    //Url de llamada al api de buscar por nombre
    const url = `${this.apiUrlCapital}/capital/${termino}`;
    return this.http.get<Capital[]>(url,{params:this.regionService.httpParams});
  }
}


