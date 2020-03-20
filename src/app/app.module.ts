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
import { SalidasComponent } from './components/salidas/salidas.component';
import { MisSolicitudesComponent } from './components/mis-solicitudes/mis-solicitudes.component';
import { CrearEventoComponent } from './components/crear-evento/crear-evento.component';
import { CrearSalidaComponent } from './components/crear-salida/crear-salida.component';
import { CrearMantenimientoComponent } from './components/crear-mantenimiento/crear-mantenimiento.component';
import { VerEventoComponent } from './components/ver-evento/ver-evento.component';
import { VerMantenimientoComponent } from './components/ver-mantenimiento/ver-mantenimiento.component';
import { VerSalidaComponent } from './components/ver-salida/ver-salida.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { ActualizarSalidaComponent } from './components/actualizar-salida/actualizar-salida.component';
import { ActualizarEventoComponent } from './components/actualizar-evento/actualizar-evento.component';
import { ActualizarMantenimientoComponent } from './components/actualizar-mantenimiento/actualizar-mantenimiento.component';

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
    PerfilComponent,
    SalidasComponent,
    MisSolicitudesComponent,
    CrearEventoComponent,
    CrearSalidaComponent,
    CrearMantenimientoComponent,
    VerEventoComponent,
    VerMantenimientoComponent,
    VerSalidaComponent,
    UsuariosComponent,
    ActualizarSalidaComponent,
    ActualizarEventoComponent,
    ActualizarMantenimientoComponent
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
