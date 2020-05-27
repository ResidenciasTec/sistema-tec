import {Injectable} from "@angular/core";
import {Router, CanActivate} from  "@angular/router";


@Injectable()
export class AdminGuard implements CanActivate{
	constructor(
		private _router: Router,
		){
	}

	canActivate():boolean {
        let identity = JSON.parse(localStorage.getItem('logueado'));
        let permisos = JSON.parse(localStorage.getItem('privilegios'));

		if(permisos && (permisos.cargo.cargo == 'administrador')){
			return true;
		}else{
			this._router.navigate(['/inicio']);
			return false;
		}
	}
}