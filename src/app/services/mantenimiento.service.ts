import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders}  from "@angular/common/http";
import {Observable} from "rxjs";
import {Mantenimiento} from "../models/mantenimiento";
import {global} from "./global";

@Injectable()
export class MantenimientoService{
	public url: string;

	constructor(
		public _http: HttpClient
		){
		this.url = global.url;
	}

	//servicio de prueba del servicio
	test(){
		return "probando el servicio de mantenimiento"
	}

	//servicio para recuperar todas las solicitudes de mantenimiento
	getMantenimientos():Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'Application/x-www-urlencoded');

		return this._http.get(this.url+'mantenimiento', {headers: headers});
	}

	//servicio para recuperar una solicitud de mantenimiento por medio de su id.
	getMantenimiento(id):Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'Application/x-www-urlencoded');

		return this._http.get(this.url+'mantenimiento/'+id, {headers: headers});
	}

	//servicio para recuperar una solicitud de mantenimiento de un usuario.
	getByUser(id):Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/x-www-urlencoded');

		return this._http.get(this.url+'mantenimiento/user/'+id, {headers: headers});
	}

	//servicio para recuperar una solicitud de mantenimiento por su status.
	getStatus(status):Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/x-www-urlencoded');
		return this._http.get(this.url+'mantenimiento/status/'+status, {headers: headers})
	}

	//servicio para crear nuevas solicitudes de mantenimiento en la base de datos.
	createMantenimiento(token, mantenimiento): Observable<any>{
		let json = JSON.stringify(mantenimiento);
		let params = 'json='+json;
		let headers = new HttpHeaders().set('Content-Type', 'Application/x-www-urlencoded')
									   .set('Authorization', token);

		return this._http.post(this.url+'mantenimiento', params, {headers: headers});

	}

	//servicio para actualizar una solicitud de mantenimiento de la base de datos.
	updateMantenimiento(token, mantenimiento, id): Observable<any>{
		let json = JSON.stringify(mantenimiento);
		let params = 'json='+json;
		let headers = new HttpHeaders().set('Content-Type', 'Application/x-www-urlencoded')
									   .set('Authorization', token);

		return this._http.put(this.url+'mantenimiento/'+id, params, {headers: headers});

	}

	//servicio para borrar una solicitud de mantenimiento de la base de datos.
	deleteMantenimiento(token, id){
		let headers = new HttpHeaders().set('Content-Type', 'Application/x-www-urlencoded')
									   .set('Authorization', token);

		return this._http.delete(this.url+'mantenimiento/'+id, {headers: headers});

	}

}