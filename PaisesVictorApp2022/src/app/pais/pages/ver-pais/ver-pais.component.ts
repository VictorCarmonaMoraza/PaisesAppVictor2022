import { PaisService } from './../../services/pais.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit {

  constructor(
  private activatedRoute: ActivatedRoute,
  private paisService:PaisService
  ) { }

  ngOnInit(): void {
    //Para suscribirnos a cualquier cambio del url
    this.activatedRoute.params
      .subscribe(params => {
        console.log(params.id);
        this.paisService.getPaisPorCodigo(params.id)
          .subscribe(datos => {
            console.log(datos);
        })

      })
  }

}
