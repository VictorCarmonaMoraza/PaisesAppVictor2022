//Modulos importados
import { SharedModule } from './shared/shared.module';
import { PaisModule } from './pais/pais.module';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Componente principal
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

//Para trabajar en los servicios
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PaisModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
