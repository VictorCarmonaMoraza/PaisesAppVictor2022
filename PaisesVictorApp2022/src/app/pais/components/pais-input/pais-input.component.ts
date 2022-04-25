import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: ['./pais-input.component.css'
  ]
})
export class PaisInputComponent implements OnInit {

  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  @Input() placeholder: string = '';
  termino: string = '';

  //Creacion de obSERVABLE
  debouncer: Subject<string> = new Subject();

  constructor() { }

  ngOnInit() {
    this.debouncer
      .pipe(debounceTime(300))
      .subscribe((valor:any) => {
      //console.log('debouncer', valor);
        this.onDebounce.emit(valor);
    });
  }

  buscar() {
    this.onEnter.emit(this.termino);
}

  teclaPresionada() {
    //const valor = event.target.value;
    this.debouncer.next(this.termino);
  }

}


