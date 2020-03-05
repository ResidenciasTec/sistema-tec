import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { routing, appRoutingProviders } from "./app.routing";
import { AngularFileUploaderModule } from "angular-file-uploader";

import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { ErrorComponent } from './components/error/error.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { TransporteComponent } from './components/transporte/transporte.component';
import { MantenimientoComponent } from './components/mantenimiento/mantenimiento.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { PerfilComponent } from './components/perfil/perfil.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    LoginComponent,
    RegistroComponent,
    ErrorComponent,
    EventosComponent,
    TransporteComponent,
    MantenimientoComponent,
    UserEditComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule,
    AngularFileUploaderModule
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
