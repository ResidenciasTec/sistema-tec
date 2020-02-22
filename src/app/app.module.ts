import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders } from "./app.routing";

import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { ErrorComponent } from './components/error/error.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { TransporteComponent } from './components/transporte/transporte.component';
import { MantenimientoComponent } from './components/mantenimiento/mantenimiento.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    LoginComponent,
    RegistroComponent,
    ErrorComponent,
    EventosComponent,
    TransporteComponent,
    MantenimientoComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
