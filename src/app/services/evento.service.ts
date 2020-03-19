import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Evento} from "../models/evento";
import {global} from "./global";

@Injectable()
export class EventoService{
	public url: string;

	constructor(
		public _http: HttpClient
		)
	{
		this.url = global.url;

	}

	//servicio de prueba para probar los servicios
	test(){
		return "servicio de eventos funcionando"
	}

	//creamos los servicios que recuperaran la informacion de nuestra api.

	//servicio para recuperar por metodo get todos los eventos
	getEventos(){
		let headers = new HttpHeaders().set('Content-type', 'application/x-www-form-urlencoded');

		return this._http.get(this.url+'eventos', {headers: headers});
	}

	//servicio para recuperar por metodo get un solo evento, pasandole un id

	getEvento(id){
		let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

		return this._http.get(this.url+'eventos/'+id, params, {headers: headers});
	}

	//servicio para recuperar una solicitud de eventos de un usuario.
	getByUser(id){
		return this._http.get(this.url+'eventos/user/'+id, {headers: headers});
	}

	//servicio para recuperar una solicitud de eventos por su status.
	getStatus(status){
		let headers = new HttpHeaders().set('Content-Type', 'application/x-www-urlencoded');
		return this._http.get(this.url+'eventos/status/'+status, {headers: headers} )
	}

	//servicio para guardar un nuevo evento en la base de datos
	crearEvento(token, evento): Observable<any>{
		let json = JSON.stringify(evento);
		let params = 'json='+json;
		let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
									   .set('Authorization', token);

		return this._http.post(this.url+'eventos', params, {headers: headers});
	} 

	//servicio para actualizar un evento ya existente en la base de datos.
	updateEvento(token, evento, id): Observable<any>{
		let json = JSON.stringify(evento);
		let params = 'json='+json;
		let headers = new HttpHeaders().set('Content-Type', 'x-www-form-urlencoded')
									   .set('Authorization', token);

		return this._http.put(this.url+'eventos/'+id, params, {headers: headers});
	}

	//servicio para borrar un evento de la base de datos por medio de su id.
	deleteEvento(token, id){
		let headers = new HttpHeaders().set('Content-Type', 'x-www-form-urlencoded')
									   .set('Authorization', token);

		return this._http.delete(this.url+'eventos/'+id, params, {headers: headers});
	}

}
