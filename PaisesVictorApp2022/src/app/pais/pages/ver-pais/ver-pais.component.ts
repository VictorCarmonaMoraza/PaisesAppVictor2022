import { PaisService } from './../../services/pais.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit {

  //El signo de interrogacionn es para que no de errores por nulo
  pais!: Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
  ) { }

  ngOnInit(): void {
    //Para suscribirnos a cualquier cambio del url
    // this.activatedRoute.params
    //   .subscribe(params => {
    //     console.log(params.id);
    //     this.paisService.getPaisPorCodigo(params.id)
    //       .subscribe(datos => {
    //         console.log(datos);
    //       })
    //   })

    //La de arriba es lo mismo pero esta es mas resumida
    this.activatedRoute.params
      .pipe(switchMap((param) => this.paisService.getPaisPorCodigo(param.id) ),
        tap(console.log)
      )
      .subscribe(resp => this.pais = resp[0]);
  }

  //tap(console.log)   -> Hace impresion por consola

}
