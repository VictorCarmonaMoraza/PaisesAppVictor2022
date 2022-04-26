import { Component} from '@angular/core';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent{

  regiones: string[] = ['africa', 'america', 'asia', 'europe', 'oceania'];

  //propiedad que se rellenara cuando pulsemos una region
  regionActiva: string = '';

  constructor() { }

  activarRegion(region: string) {
    this.regionActiva = region;

    
}

}
