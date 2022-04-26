import { RegionService } from './../../services/region.service';
import { PaisService } from './../../services/pais.service';
import { Component} from '@angular/core';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent{

  regiones: string[] = ['EU', 'EFTA', 'CARICOM', 'PA', 'AU', 'USAN', 'EEU', 'AL', 'ASEAN', 'CAIS', 'CEFTA', 'NAFTA', 'SAARC'];
  //propiedad que se rellenara cuando pulsemos una region
  regionActiva: string = '';
  paises: Country[] = [];

  constructor(private regionService:RegionService) { }

  activarRegion(region: string) {

    //Si esto se cumple no se hace nada
    if (region === this.regionActiva) {
      return;
    }
    this.regionActiva = region;
    this.paises = [];

    this.regionService.buscarRegion(region)
      .subscribe(paises => this.paises = paises);
  }

  getClaseCSS(region: string): string{
    return (region === this.regionActiva) ? 'btn btn-primary' : 'btn btn-outline-primary'
  }

}
