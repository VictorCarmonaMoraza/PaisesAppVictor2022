import { CapitalService } from './../../services/capital.service';
import { Capital } from './../../interfaces/capital.interface';
import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent implements OnInit {


  termino: string = '';
  tenemosError: boolean = false;
  capitales: Capital[] = [];

  constructor(private capitalService: CapitalService) { }

  ngOnInit(): void {
  }

  buscar(argumento: string): void {
    this.tenemosError = false;
    //this.termino= argumento;
    this.capitalService.buscarCapital(argumento)
      .subscribe((capitales) => {
        console.log(capitales);
        //Primer pais
        //resp[0].
        this.capitales = capitales
      }, (err) => {
        //Si tenemos error ponemos la variable a true
        this.tenemosError = true;
        this.capitales = [];
      })
  }

  sugerencias(termino: string) {
    this.tenemosError = false;
    this.buscar(termino);
  }

}
