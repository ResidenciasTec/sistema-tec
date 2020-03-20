import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Ubicacion} from "../models/ubicacion";
import {global} from "./global";

@Injectable()
export class ubicacionService{
	public url: string;

	constructor(
		public _http: HttpClient
		)
	{
		this.url = global.url;

	}

	getUbicaciones():Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

		return this._http.get(this.url + 'ubicaciones', {headers: headers});


	}

	getUbicacion(id):Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

		return this._http.get(this.url + 'ubicaciones/'+id, {headers: headers});


	}

	createUbicacion(token, ubicacion):Observable<any>{
		let json = JSON.stringify(ubicacion);
		let params = 'json='+json;
		let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
		  							   .set('Authorization', token);

		return this._http.post(this.url + 'ubicaciones', params, {headers: headers});


	}

	updateUbicacion(token, ubicacion, id):Observable<any>{
		let json = JSON.stringify(ubicacion);
		let params = 'json='+json;
		let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
		  							   .set('Authorization', token);

		return this._http.put(this.url + 'ubicaciones/'+id,  params, {headers: headers});


	}

	deleteUbicacion(token, id):Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
		  							  .set('Authorization', token);

		return this._http.delete(this.url + 'ubicaciones/'+id, {headers: headers});

		
	}
}