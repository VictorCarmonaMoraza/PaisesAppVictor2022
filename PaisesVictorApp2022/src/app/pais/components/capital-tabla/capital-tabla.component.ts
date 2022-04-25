import { Capital } from './../../interfaces/capital.interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-capital-tabla',
  templateUrl: './capital-tabla.component.html',
  styleUrls: ['./capital-tabla.component.css']
})
export class CapitalTablaComponent implements OnInit {


  @Input() capitalesRecibidas: Capital[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
