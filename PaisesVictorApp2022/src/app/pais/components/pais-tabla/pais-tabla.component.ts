import { Capital } from './../../interfaces/capital.interface';
import { Country } from './../../interfaces/pais.interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html',
  styles: ['./pais-tabla.component.css']
})
export class PaisTablaComponent implements OnInit {

  @Input() paisesRecibidos: Country[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
