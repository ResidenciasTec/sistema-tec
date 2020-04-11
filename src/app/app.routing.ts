
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

    //otras rutas
    {path: 'transporte', component: TransporteComponent, canActivate:[UserGuard]},
    {path: 'usuarios', component: UsuariosComponent, canActivate:[UserGuard]},

     //ruta de error
    {path: '**', component: ErrorComponent },

];

//exportar configuracion de rutas
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);