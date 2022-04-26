import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-region-tabla',
  templateUrl: './region-tabla.component.html',
  styleUrls: ['./region-tabla.component.css']
})
export class RegionTablaComponent implements OnInit {

  @Input() regionesRecibidos: Country[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
