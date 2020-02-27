//imports necesarios para el router
import {ModuleWithProviders} from "@angular/core";
import {Routes, RouterModule } from "@angular/router";

//importar los componentes
import {LoginComponent} from "./login/login.component";
import {RegistroComponent} from "./registro/registro.component";
import {InicioComponent} from "./inicio/inicio.component";
import {ErrorComponent} from "./components/error/error.component";
import {TransporteComponent} from "./components/transporte/transporte.component";
import {EventosComponent} from "./components/eventos/eventos.component";
import {MantenimientoComponent} from "./components/mantenimiento/mantenimiento.component";
import {UserEditComponent} from "./components/user-edit/user-edit.component";
import {PerfilComponent} from "./components/perfil/perfil.component";


//definir las rutas
const  appRoutes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'login', component: LoginComponent},
    {path: 'logout/:sure', component: LoginComponent},
    {path: 'registro', component: RegistroComponent},
    {path: 'inicio', component: InicioComponent},
    {path: 'error', component: ErrorComponent },
    {path: 'transporte', component: TransporteComponent},
    {path: 'eventos', component: EventosComponent},
    {path: 'mantenimiento', component: MantenimientoComponent},
    {path: 'editar-perfil', component: UserEditComponent},
    {path: 'perfil', component: PerfilComponent}
];

//exportar configuracion de rutas
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);