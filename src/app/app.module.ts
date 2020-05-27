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
import {AdminGuard} from "./services/admin.guard";
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
import { CardComponent } from './reutilizables/card/card.component';
import { CardCarrouselComponent } from './reutilizables/card-carrousel/card-carrousel.component';
import { CardGridComponent } from './reutilizables/card-grid/card-grid.component';
import { CardFilterComponent } from './reutilizables/card-filter/card-filter.component';
import { SolicitudBoxComponent } from './reutilizables/solicitud-box/solicitud-box.component';
import { SolicitudCardComponent } from './reutilizables/solicitud-card/solicitud-card.component';
import { SolicitudBotonesComponent } from './reutilizables/solicitud-botones/solicitud-botones.component';
import { SolicitudCardsDatosComponent } from './reutilizables/solicitud-cards-datos/solicitud-cards-datos.component';
import { VerTransporteComponent } from './adminComponents/ver-transporte/ver-transporte.component';
import { VerDepartamentoComponent } from './adminComponents/ver-departamento/ver-departamento.component';
import { ActualizarTransporteComponent } from './adminComponents/actualizar-transporte/actualizar-transporte.component';
import { ActualizarDepartamentoComponent } from './adminComponents/actualizar-departamento/actualizar-departamento.component';
import { CrearDepartamentoComponent } from './adminComponents/crear-departamento/crear-departamento.component';
import { CrearTransporteComponent } from './adminComponents/crear-transporte/crear-transporte.component';
import { PrintComponent } from './adminComponents/print/print.component';
import { EventopdfComponent } from './adminComponents/eventopdf/eventopdf.component';
import { MantenimientopdfComponent } from './adminComponents/mantenimientopdf/mantenimientopdf.component';
import { SalidapdfComponent } from './adminComponents/salidapdf/salidapdf.component';
import { ButtonComponent } from './reutilizables/button/button.component';
import { CrearCargoComponent } from './adminComponents/crear-cargo/crear-cargo.component';
import { EditarCargoComponent } from './adminComponents/editar-cargo/editar-cargo.component';
import { CargosComponent } from './adminComponents/cargos/cargos.component';
import { PermisosComponent } from './adminComponents/permisos/permisos.component';
import { EditarPermisosComponent } from './adminComponents/editar-permisos/editar-permisos.component';
import { CrearPermisosComponent } from './adminComponents/crear-permisos/crear-permisos.component';
import { StatusvehiculosComponent } from './adminComponents/statusvehiculos/statusvehiculos.component';
import { StatusordersComponent } from './adminComponents/statusorders/statusorders.component';
import { CrearStatusorderComponent } from './adminComponents/crear-statusorder/crear-statusorder.component';
import { CrearStatusvehiculoComponent } from './adminComponents/crear-statusvehiculo/crear-statusvehiculo.component';
import { EditarStatusvehiculoComponent } from './adminComponents/editar-statusvehiculo/editar-statusvehiculo.component';
import { EditarStatusorderComponent } from './adminComponents/editar-statusorder/editar-statusorder.component';
import { CrearEspacioComponent } from './adminComponents/crear-espacio/crear-espacio.component';
import { EditarEspacioComponent } from './adminComponents/editar-espacio/editar-espacio.component';
import { CrearSubdireccionComponent } from './adminComponents/crear-subdireccion/crear-subdireccion.component';
import { CrearUbicacionComponent } from './adminComponents/crear-ubicacion/crear-ubicacion.component';
import { EditarUbicacionComponent } from './adminComponents/editar-ubicacion/editar-ubicacion.component';
import { EditarSubdireccionComponent } from './adminComponents/editar-subdireccion/editar-subdireccion.component';

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
    DepartamentosComponent,
    CardComponent,
    CardCarrouselComponent,
    CardGridComponent,
    CardFilterComponent,
    SolicitudBoxComponent,
    SolicitudCardComponent,
    SolicitudBotonesComponent,
    SolicitudCardsDatosComponent,
    VerTransporteComponent,
    VerDepartamentoComponent,
    ActualizarTransporteComponent,
    ActualizarDepartamentoComponent,
    CrearDepartamentoComponent,
    CrearTransporteComponent,
    PrintComponent,
    EventopdfComponent,
    MantenimientopdfComponent,
    SalidapdfComponent,
    ButtonComponent,
    CrearCargoComponent,
    EditarCargoComponent,
    CargosComponent,
    PermisosComponent,
    EditarPermisosComponent,
    CrearPermisosComponent,
    StatusvehiculosComponent,
    StatusordersComponent,
    CrearStatusorderComponent,
    CrearStatusvehiculoComponent,
    EditarStatusvehiculoComponent,
    EditarStatusorderComponent,
    CrearEspacioComponent,
    EditarEspacioComponent,
    CrearSubdireccionComponent,
    CrearUbicacionComponent,
    EditarUbicacionComponent,
    EditarSubdireccionComponent
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
    UserGuard,
    AdminGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
