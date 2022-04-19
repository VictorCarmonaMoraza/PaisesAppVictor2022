import { PaisService } from './../../services/pais.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent{

  termino: string = '';
  tenemosError: boolean = false;

  constructor(private paisService:PaisService) { }

  ngOnInit(): void {
  }

  buscar(): void  {
    this.tenemosError = false;
    console.log(this.termino);
    this.paisService.buscarPais(this.termino)
      .subscribe((paises) => {
        console.log(paises);
        //Primer pais
        //resp[0].
      }, (err) => {
       //Si tenemos error ponemos la variable a true
        this.tenemosError = true;
      })
  }

}
