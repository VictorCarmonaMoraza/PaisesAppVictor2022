import { PaisService } from './../../services/pais.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent{

  termino: string = 'Holam mundo';

  constructor(private paisService:PaisService) { }

  ngOnInit(): void {
  }

  buscar():void  {
    console.log(this.termino);
    this.paisService.buscarPais(this.termino)
      .subscribe(resp => {
        console.log(resp);
      })
  }

}
