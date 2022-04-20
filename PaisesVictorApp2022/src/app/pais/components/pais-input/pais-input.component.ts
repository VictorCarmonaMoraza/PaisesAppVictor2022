import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: ['./pais-input.component.css'
  ]
})
export class PaisInputComponent {

  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  termino: string = '';

  constructor(private paisService: PaisService) { }

  buscar() {
    this.onEnter.emit(this.termino);
}

}
