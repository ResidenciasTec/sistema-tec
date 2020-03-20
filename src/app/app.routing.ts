
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



//definir las rutas
const  appRoutes: Routes = [
    {path: '', component: LoginComponent},

    //rutas de registros
    {path: 'login', component: LoginComponent},
    {path: 'logout/:sure', component: LoginComponent},
    {path: 'registro', component: RegistroComponent},

    //ruta principal
    {path: 'inicio', component: InicioComponent},

    //ruta de error
    {path: 'error', component: ErrorComponent },

    //rutas de solicitudes
    {path: 'eventos', component: EventosComponent},
    {path: 'mantenimiento', component: MantenimientoComponent},
    {path: 'salidas', component: SalidasComponent},

    //rutas de crear solicitudes
    {path: 'mantenimiento/crear', component: CrearMantenimientoComponent},
    {path: 'eventos/crear', component: CrearEventoComponent},
    {path: 'salidas/crear', component: CrearSalidaComponent},

    //rutas para ver una solicitud
    {path: 'mantenimiento/:id', component: VerMantenimientoComponent},
    {path: 'eventos/:id', component: VerEventoComponent},
    {path: 'salidas/:id', component: VerSalidaComponent},

    //rutas para actualizar una solicitud
    {path: 'mantenimiento/actualizar/:id', component: ActualizarMantenimientoComponent},
    {path: 'eventos/actualizar/:id', component: ActualizarEventoComponent},
    {path: 'salidas/actualizar/:id', component: ActualizarSalidaComponent},

    //ruta de usuario
    {path: 'perfil', component: PerfilComponent},    
    {path: 'perfil/editar', component: UserEditComponent},
    {path: 'perfil/solicitudes', component: MisSolicitudesComponent},

    //otras rutas
    {path: 'transporte', component: TransporteComponent},
    {path: 'usuarios', component: UsuariosComponent},

];

//exportar configuracion de rutas
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);