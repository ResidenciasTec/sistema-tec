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
	getMantenimientos(token):Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/json')
								       .set('Authorization', 'Bearer '+token);

		return this._http.get(this.url+'mantenimientos', {headers: headers});
	}

	//servicio para recuperar una solicitud de mantenimiento por medio de su id.
	getMantenimiento(token, id):Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/json')
									   .set('Authorization', 'Bearer '+token);

		return this._http.get(this.url+'mantenimientos/'+id, {headers: headers});
	}

	//servicio para recuperar una solicitud de mantenimiento de un usuario.
	getByUser(token, id):Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/json')
						               .set('Authorization', 'Bearer '+token);

		return this._http.get(this.url+'mantenimientos/user/'+id, {headers: headers});
	}

	//servicio para recuperar una solicitud de mantenimiento por su status.
	getStatus(token, status):Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/json')
									   .set('Authorization', 'Bearer '+token);
									   
		return this._http.get(this.url+'mantenimientos/status/'+status, {headers: headers})
	}

	//servicio para crear nuevas solicitudes de mantenimiento en la base de datos.
	createMantenimiento(token, mantenimiento): Observable<any>{
		let json = JSON.stringify(mantenimiento);
		let headers = new HttpHeaders().set('Content-Type', 'application/json')
		                               .set('Authorization', 'Bearer '+token);

		return this._http.post(this.url+'mantenimientos', json, {headers: headers});

	}

	//servicio para actualizar una solicitud de mantenimiento de la base de datos.
	updateMantenimiento(token, mantenimiento, id): Observable<any>{
		let json = JSON.stringify(mantenimiento);
		let headers = new HttpHeaders().set('Content-Type', 'application/json')
								       .set('Authorization', 'Bearer '+token);

		return this._http.put(this.url+'mantenimientos/'+id, json, {headers: headers});

	}

	//servicio para borrar una solicitud de mantenimiento de la base de datos.
	deleteMantenimiento(token, id){
		let headers = new HttpHeaders().set('Content-Type', 'application/json')
									   .set('Authorization', 'Bearer '+token);

		return this._http.delete(this.url+'mantenimientos/'+id, {headers: headers});

	}

	
	getNextPage(token, link):Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/json')
										.set('Authorization', 'Bearer '+token);

		return this._http.get(link, {headers: headers});
	}

	
	getAntiguo(token):Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/json')
										.set('Authorization', 'Bearer '+token);

		return this._http.get(this.url+'mantenimientos/asc', {headers: headers});
	}
	
	getPorMes(token):Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/json')
										.set('Authorization', 'Bearer '+token);

		return this._http.get(this.url+'mantenimientos/month', {headers: headers});
	}
	
	getPorStatus(token, link):Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/json')
										.set('Authorization', 'Bearer '+token);

		return this._http.get(this.url+'mantenimientos/status', {headers: headers});
	}

}