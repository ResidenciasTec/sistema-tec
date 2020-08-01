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

	getUbicaciones(token):Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/json')
									   .set('Authorization', 'Bearer '+token);

		return this._http.get(this.url + 'ubications', {headers: headers});


	}

	getUbicacion(token, id):Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/json')
									   .set('Authorization', 'Bearer '+token);

		return this._http.get(this.url + 'ubications/'+id, {headers: headers});
 

	}

	createUbicacion(token, ubicacion):Observable<any>{
		let json = JSON.stringify(ubicacion);
		let headers = new HttpHeaders().set('Content-Type', 'application/json')
									   .set('Authorization', 'Bearer '+token);

		return this._http.post(this.url + 'ubications', json, {headers: headers});


	}

	updateUbicacion(token, ubicacion, id):Observable<any>{
		let json = JSON.stringify(ubicacion);
		let headers = new HttpHeaders().set('Content-Type', 'application/json')
									   .set('Authorization', 'Bearer '+token);

		return this._http.put(this.url + 'ubications/'+id, json, {headers: headers});


	}

	deleteUbicacion(token, id):Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/json')
									   .set('Authorization', 'Bearer '+token);

		return this._http.delete(this.url + 'ubications/'+id, {headers: headers});

		
	}
}