import { PaisService } from './../../services/pais.service';
import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent{

  termino: string = '';
  tenemosError: boolean = false;
  paises: Country[] = [];

  constructor(private paisService:PaisService) { }

  ngOnInit(): void {
  }

  buscar(argumento:string): void {
    this.tenemosError = false;
    //this.termino= argumento;
    this.paisService.buscarPais(argumento)
      .subscribe((paises) => {
        console.log(paises);
        //Primer pais
        //resp[0].
        this.paises = paises
      }, (err) => {
        //Si tenemos error ponemos la variable a true
        this.tenemosError = true;
        this.paises = [];
      })
  }

  sugerencias(termino: string) {
    this.tenemosError = false;
    this.buscar(termino);
  }

}
