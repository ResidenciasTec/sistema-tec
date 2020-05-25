import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders}  from "@angular/common/http";
import {Observable} from "rxjs";
import {Salida} from "../models/salida";
import {global} from "./global";

@Injectable()
export class SalidaService{
	public url: string;

	constructor(
		public _http: HttpClient
		)
	{
		this.url = global.url;
	}

	//servicio de prueba para probar los servicios

	test(){
		return "servicio de salidas funcionando"
	}
 
	//servicio para recuperar todas las solicitudes de salidas.
	getSalidas(token):Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/json')
								       .set('Authorization', 'Bearer '+token);

		return this._http.get(this.url+'salidas', {headers: headers});
	}

	//servicio para recuperar una solicitud de salidas mediante su id.
	getSalida(token, id):Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/json')
									   .set('Authorization', 'Bearer '+token);

		return this._http.get(this.url+'salidas/'+id, {headers: headers});
	}

	//servicio para recuperar una solicitud de salidas de un usuario.
	getByUser(token, id):Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/json')
									   .set('Authorization', 'Bearer '+token);
		
		return this._http.get(this.url+'salidas/user/'+id, {headers: headers});
	}

	//servicio para recuperar una solicitud de salidas por su status.
	getStatus(token, status):Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/json')
									   .set('Authorization', 'Bearer '+token);

		return this._http.get(this.url+'salidas/status/'+status, {headers: headers} )
	}

	//servicio para crear nuevas solicitudes de salidas en la base de datos.
	createSalida(token, salida): Observable<any>{

		let json = JSON.stringify(salida);

		let headers = new HttpHeaders().set('Content-Type', 'application/json')
									   .set('Authorization', 'Bearer '+token);

		return this._http.post(this.url+'salidas', json, {headers: headers});

	}

	//servicio para actualizar una solicitud de salida en la base de datos.
	updateSalida(token, salida, id): Observable<any>{
		let json = JSON.stringify(salida);

		let headers = new HttpHeaders().set('Content-Type', 'application/json')
								       .set('Authorization', 'Bearer '+token);

		return this._http.put(this.url+'salidas/'+id, json, {headers: headers});

	}

	//servicio para borrar una solicitud de salida en la base de datos.
	deleteSalida(token, id):Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/json')
									  .set('Authorization', 'Bearer '+token);

		return this._http.delete(this.url+'salidas/'+id, {headers: headers});


	}

	
	getNextPage(token, link):Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/json')
										.set('Authorization', 'Bearer '+token);

		return this._http.get(link, {headers: headers});
	}


	getAntiguos(token):Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/json')
										.set('Authorization', 'Bearer '+token);

		return this._http.get(this.url+'salidaantiguos', {headers: headers});
	}
	
	getPorMes(token):Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/json')
										.set('Authorization', 'Bearer '+token);

		return this._http.get(this.url+'salidapormes', {headers: headers});
	}
	
	getPorStatus(token):Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/json')
										.set('Authorization', 'Bearer '+token);

		return this._http.get(this.url+'salidastatus', {headers: headers});
	}

	byUser(token, id):Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/json')
										.set('Authorization', 'Bearer '+token);

		return this._http.get(this.url+'salidabyuser/'+id, {headers: headers});
	}
}