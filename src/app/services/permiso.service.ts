import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {global} from "./global";

@Injectable()
export class PermisoService{
	public url: string;

	constructor(
		public _http: HttpClient
		)
	{
		this.url = global.url;

	}

	getPermisos(token):Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/json')
									   .set('Authorization', 'Bearer '+token);

		return this._http.get(this.url + 'puestos', {headers: headers});


	}

	getPermiso(token, id):Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/json')
									   .set('Authorization', 'Bearer '+token);

		return this._http.get(this.url + 'puestos/'+id, {headers: headers});
 

	}

	createPermiso(token, permiso):Observable<any>{
		let json = JSON.stringify(permiso);
		let headers = new HttpHeaders().set('Content-Type', 'application/json')
									   .set('Authorization', 'Bearer '+token);

		return this._http.post(this.url + 'puestos', json, {headers: headers});


	}

	updatePermiso(token, permiso, id):Observable<any>{
		let json = JSON.stringify(permiso);
		let headers = new HttpHeaders().set('Content-Type', 'application/json')
									   .set('Authorization', 'Bearer '+token);

		return this._http.put(this.url + 'puestos/'+id, json, {headers: headers});


	}

	deletePermiso(token, id):Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/json')
									   .set('Authorization', 'Bearer '+token);

		return this._http.delete(this.url + 'puestos/'+id, {headers: headers});

		
	}

	
	byUser(token, id):Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/json')
									   .set('Authorization', 'Bearer '+token);

		return this._http.get(this.url + 'puestobyuser/'+id, {headers: headers});

		
	}


}