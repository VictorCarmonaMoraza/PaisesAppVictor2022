import { PaisService } from './../../services/pais.service';
import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent {

  termino: string = '';
  tenemosError: boolean = false;
  paises: Country[] = [];
  paisesSugeridos: Country[] = [];
  mostrarSugerencias: boolean = false;

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }

  buscar(argumento: string): void {
    this.mostrarSugerencias = false;
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
    this.termino = termino;
    this.mostrarSugerencias = true;
    //this.buscar(termino);
    this.paisService.buscarPais(termino)
      .subscribe(
        paises => this.paisesSugeridos = paises.splice(0, 3),
        error => this.paisesSugeridos = []
      ); //le decimos que solo queremos tres paises
  }

  buscarSugerido(termino:string) {
    this.buscar(termino);


  }

}
