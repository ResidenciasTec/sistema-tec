import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { routing, appRoutingProviders } from "./app.routing";
import { AngularFileUploaderModule } from "angular-file-uploader";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations"
import {ToastrModule} from "ngx-toastr"
import { NgxSpinnerModule } from "ngx-spinner";


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

//servicios
import {UserService} from "./services/user.service";
import {UserGuard} from "./services/user.guard";
import { InputDirective } from './directivas/forms/input.directive';
import { SubmitDirective } from './directivas/submit/submit.directive';
import { TextareaDirective } from './directivas/textarea/textarea.directive';
import { BannerCrearComponent } from './reutilizables/banner-crear/banner-crear.component';
import { StatusComponent } from './reutilizables/status/status.component';
import { BannerInicioComponent } from './reutilizables/banner-inicio/banner-inicio.component';
import { AdminComponent } from './adminComponents/admin/admin.component';
import { TransportesComponent } from './adminComponents/transportes/transportes.component';
import { EspaciosComponent } from './adminComponents/espacios/espacios.component';
import { UbicacionesComponent } from './adminComponents/ubicaciones/ubicaciones.component';
import { SubdireccionesComponent } from './adminComponents/subdirecciones/subdirecciones.component';
import { DepartamentosComponent } from './adminComponents/departamentos/departamentos.component';

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
    ActualizarMantenimientoComponent,
    InputDirective,
    SubmitDirective,
    TextareaDirective,
    BannerCrearComponent,
    StatusComponent,
    BannerInicioComponent,
    AdminComponent,
    TransportesComponent,
    EspaciosComponent,
    UbicacionesComponent,
    SubdireccionesComponent,
    DepartamentosComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule,
    AngularFileUploaderModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgxSpinnerModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [
    appRoutingProviders,
    UserService,
    UserGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
