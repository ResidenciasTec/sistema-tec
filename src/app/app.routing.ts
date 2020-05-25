
//imports necesarios para el router
import {ModuleWithProviders} from "@angular/core";
import {Routes, RouterModule } from "@angular/router";

//importar los componentes

//componentes de sesion
import {LoginComponent} from "./login/login.component";
import {RegistroComponent} from "./registro/registro.component";

//componente principal
import {InicioComponent} from "./inicio/inicio.component";

//componente de error
import {ErrorComponent} from "./components/error/error.component";

//componentes de solicitudes
import {EventosComponent} from "./components/eventos/eventos.component";
import {MantenimientoComponent} from "./components/mantenimiento/mantenimiento.component";
import {SalidasComponent} from "./components/salidas/salidas.component";

//componentes de crear solicitudes
import {CrearSalidaComponent} from "./components/crear-salida/crear-salida.component";
import {CrearEventoComponent} from "./components/crear-evento/crear-evento.component";
import {CrearMantenimientoComponent} from "./components/crear-mantenimiento/crear-mantenimiento.component";

//componentes para visualizar solicitudes
import {VerSalidaComponent} from "./components/ver-salida/ver-salida.component";
import {VerEventoComponent} from "./components/ver-evento/ver-evento.component";
import {VerMantenimientoComponent} from "./components/ver-mantenimiento/ver-mantenimiento.component";

//componentes para actualizar solicitudes
import {ActualizarSalidaComponent} from "./components/actualizar-salida/actualizar-salida.component";
import {ActualizarEventoComponent} from "./components/actualizar-evento/actualizar-evento.component";
import {ActualizarMantenimientoComponent} from "./components/actualizar-mantenimiento/actualizar-mantenimiento.component";

//componentes de usuario
import {UserEditComponent} from "./components/user-edit/user-edit.component";
import {PerfilComponent} from "./components/perfil/perfil.component";
import {MisSolicitudesComponent} from "./components/mis-solicitudes/mis-solicitudes.component";

//componentes de administrador
import {AdminComponent} from "./adminComponents/admin/admin.component";
import {DepartamentosComponent} from "./adminComponents/departamentos/departamentos.component";
import {UbicacionesComponent} from "./adminComponents/ubicaciones/ubicaciones.component";
import {EspaciosComponent} from "./adminComponents/espacios/espacios.component";
import {SubdireccionesComponent} from "./adminComponents/subdirecciones/subdirecciones.component";
import {TransportesComponent} from "./adminComponents/transportes/transportes.component";

//componentes de administrador para ver
import {VerTransporteComponent} from "./adminComponents/ver-transporte/ver-transporte.component";
import {VerDepartamentoComponent} from "./adminComponents/ver-departamento/ver-departamento.component";

//componentes de adminsitrador para actualizar
import {ActualizarTransporteComponent} from "./adminComponents/actualizar-transporte/actualizar-transporte.component";
import {ActualizarDepartamentoComponent} from "./adminComponents/actualizar-departamento/actualizar-departamento.component";

//componentes de administrador para crear
import {CrearTransporteComponent} from "./adminComponents/crear-transporte/crear-transporte.component";
import {CrearDepartamentoComponent} from "./adminComponents/crear-departamento/crear-departamento.component";

//componentes para generar pdf
import {EventopdfComponent} from "./adminComponents/eventopdf/eventopdf.component";
import {MantenimientopdfComponent} from "./adminComponents/mantenimientopdf/mantenimientopdf.component";
import {SalidapdfComponent} from "./adminComponents/salidapdf/salidapdf.component";

//componentes de administrador para permisos
import {CargosComponent} from "./adminComponents/cargos/cargos.component";
import {CrearCargoComponent} from "./adminComponents/crear-cargo/crear-cargo.component";
import {EditarCargoComponent} from "./adminComponents/editar-cargo/editar-cargo.component";

import {PermisosComponent} from "./adminComponents/permisos/permisos.component";
import {EditarPermisosComponent} from "./adminComponents/editar-permisos/editar-permisos.component";
import {CrearPermisosComponent} from "./adminComponents/crear-permisos/crear-permisos.component";

//componentes de administrador para espacios
import {CrearEspacioComponent} from "./adminComponents/crear-espacio/crear-espacio.component";
import {EditarEspacioComponent} from "./adminComponents/editar-espacio/editar-espacio.component";

//componentes de administrador para subdirecciones
import {CrearSubdireccionComponent} from "./adminComponents/crear-subdireccion/crear-subdireccion.component";
import {EditarSubdireccionComponent} from "./adminComponents/editar-subdireccion/editar-subdireccion.component";

//componentes de administrador para ubicaciones
import {CrearUbicacionComponent} from "./adminComponents/crear-ubicacion/crear-ubicacion.component";
import {EditarUbicacionComponent} from "./adminComponents/editar-ubicacion/editar-ubicacion.component";

//componentes de administrador para status de los vehiculos
import {StatusvehiculosComponent} from "./adminComponents/statusvehiculos/statusvehiculos.component";
import {CrearStatusvehiculoComponent} from "./adminComponents/crear-statusvehiculo/crear-statusvehiculo.component";
import {EditarStatusvehiculoComponent} from "./adminComponents/editar-statusvehiculo/editar-statusvehiculo.component";

//componentes de administrador para status de las solicitudes
import {StatusordersComponent} from "./adminComponents/statusorders/statusorders.component";
import {CrearStatusorderComponent} from "./adminComponents/crear-statusorder/crear-statusorder.component";
import {EditarStatusorderComponent} from "./adminComponents/editar-statusorder/editar-statusorder.component";


//otros componentes
import {TransporteComponent} from "./components/transporte/transporte.component";
import {UsuariosComponent} from "./components/usuarios/usuarios.component";

//importar guards
import {UserGuard} from "./services/user.guard";

 

//definir las rutas
const  appRoutes: Routes = [
    {path: '', component: InicioComponent, canActivate:[UserGuard]},

    //rutas de registros
    {path: 'login', component: LoginComponent},
    {path: 'logout/:sure', component: LoginComponent},
    {path: 'registro', component: RegistroComponent},

    //ruta principal
    {path: 'inicio', component: InicioComponent, canActivate:[UserGuard]},

    //rutas de solicitudes
    {path: 'eventos', component: EventosComponent, canActivate:[UserGuard]},
    {path: 'mantenimiento', component: MantenimientoComponent, canActivate:[UserGuard]},
    {path: 'salidas', component: SalidasComponent, canActivate:[UserGuard]},

    //rutas de crear solicitudes
    {path: 'mantenimiento/crear', component: CrearMantenimientoComponent, canActivate:[UserGuard]},
    {path: 'eventos/crear', component: CrearEventoComponent, canActivate:[UserGuard]},
    {path: 'salidas/crear', component: CrearSalidaComponent, canActivate:[UserGuard]},

    //rutas para ver una solicitud
    {path: 'mantenimiento/:id', component: VerMantenimientoComponent, canActivate:[UserGuard]},
    {path: 'eventos/:id', component: VerEventoComponent, canActivate:[UserGuard]},
    {path: 'salidas/:id', component: VerSalidaComponent, canActivate:[UserGuard]},

    //rutas para actualizar una solicitud
    {path: 'mantenimiento/actualizar/:id', component: ActualizarMantenimientoComponent, canActivate:[UserGuard]},
    {path: 'eventos/actualizar/:id', component: ActualizarEventoComponent, canActivate:[UserGuard]},
    {path: 'salidas/actualizar/:id', component: ActualizarSalidaComponent, canActivate:[UserGuard]},

    //ruta de usuario
    {path: 'perfil', component: PerfilComponent, canActivate:[UserGuard]},    
    {path: 'perfil/editar', component: UserEditComponent, canActivate:[UserGuard]},
    {path: 'perfil/solicitudes', component: MisSolicitudesComponent, canActivate:[UserGuard]},

    //rutas de usuario administrador
    {path: 'admin', component: AdminComponent, canActivate:[UserGuard]},
    {path: 'transportes', component: TransportesComponent, canActivate:[UserGuard]},
    {path: 'departamentos', component: DepartamentosComponent, canActivate:[UserGuard]},

    //rutas de usuario administrador para ver
    {path: 'vehiculo/:id', component: VerTransporteComponent, canActivate:[UserGuard] },
    {path: 'departamentos/:id', component: VerDepartamentoComponent, canActivate:[UserGuard]},

    //rutas de usuario administrador para actualizar
    {path: 'vehiculos/actualizar/:id', component: ActualizarTransporteComponent, canActivate:[UserGuard]},
    {path: 'departamentos/actualizar/:id', component: ActualizarDepartamentoComponent, canActivate:[UserGuard]},

    //rutas de usuario administrador para crear
    {path: 'vehiculos/crear', component: CrearTransporteComponent, canActivate:[UserGuard]},
    {path: 'departamento/crear', component: CrearDepartamentoComponent, canActivate:[UserGuard]},
    
    //rutas para generar solicictudes en pdf
    {path: 'eventos/pdf/:id', component: EventopdfComponent, canActivate: [UserGuard]},
    {path: 'mantenimientos/pdf/:id', component: MantenimientopdfComponent, canActivate: [UserGuard]},
    {path: 'salidas/pdf/:id', component: SalidapdfComponent, canActivate:[UserGuard]},

    //rutas para permisos
    {path: 'permisos', component: PermisosComponent, canActivate: [UserGuard]},
    {path: 'permisos/crear', component: CrearPermisosComponent, canActivate: [UserGuard]},
    {path: 'permisos/editar/:id', component: EditarPermisosComponent, canActivate: [UserGuard]},

    //rutas para cargos
    {path: 'cargos', component: CargosComponent, canActivate: [UserGuard]},
    {path: 'cargos/editar/:id', component: EditarCargoComponent, canActivate: [UserGuard]},
    {path: 'cargos/crear', component: CrearCargoComponent, canActivate: [UserGuard]},

    //rutas para espacios
    {path: 'espacios', component: EspaciosComponent, canActivate:[UserGuard]},
    {path: 'espacios/editar/:id', component: EditarEspacioComponent, canActivate: [UserGuard]},
    {path: 'espacios/crear', component: CrearEspacioComponent, canActivate: [UserGuard]},

    //rutas para subdirecciones
    {path: 'subdirecciones', component: SubdireccionesComponent, canActivate:[UserGuard]},
    {path: 'subdirecciones/editar/:id', component: EditarSubdireccionComponent, canActivate: [UserGuard]},
    {path: 'subdirecciones/crear', component: CrearSubdireccionComponent, canActivate: [UserGuard]},

    //rutas para ubicaciones
    {path: 'ubicaciones', component: UbicacionesComponent, canActivate:[UserGuard]},
    {path: 'ubicaciones/editar/:id', component: EditarUbicacionComponent, canActivate: [UserGuard]},
    {path: 'ubicaciones/crear', component: CrearUbicacionComponent, canActivate: [UserGuard]},

    //rutas para statusvehiculos
    {path: 'status/vehiculo', component: StatusvehiculosComponent, canActivate: [UserGuard]},
    {path: 'status/vehiculo/editar/:id', component: EditarStatusvehiculoComponent, canActivate: [UserGuard]},
    {path: 'status/vehiculo/crear', component: CrearStatusorderComponent, canActivate: [UserGuard]},

    //rutas para statusorders
    {path: 'status/mantenimiento', component: StatusordersComponent, canActivate: [UserGuard]},
    {path: 'status/mantenimiento/editar/:id', component: EditarStatusorderComponent, canActivate: [UserGuard]},
    {path: 'status/mantenimiento/crear', component: CrearStatusorderComponent, canActivate: [UserGuard]},

    //otras rutas 
    {path: 'usuarios', component: UsuariosComponent, canActivate:[UserGuard]},


     //ruta de error
    {path: '**', component: ErrorComponent },

];

//exportar configuracion de rutas
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);