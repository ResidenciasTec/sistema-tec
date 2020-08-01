import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {global} from "./global";

@Injectable()
export class TransporteService{
	public url: string;

	constructor(
		public _http: HttpClient
		)
	{
		this.url = global.url;

	}

	getTransportes(token):Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/json')
									   .set('Authorization', 'Bearer '+token);

		return this._http.get(this.url + 'vehiculos', {headers: headers});

	}

	getTransporte(token, id):Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/json')
										.set('Authorization', 'Bearer '+token);

		return this._http.get(this.url + 'vehiculos/'+id, {headers: headers});


	}

	createTransporte(token, vehiculo):Observable<any>{
		let json = JSON.stringify(vehiculo);
		let headers = new HttpHeaders().set('Content-Type', 'application/json')
										.set('Authorization', 'Bearer '+token);

		return this._http.post(this.url + 'vehiculos', json, {headers: headers});


	}

	updateTransporte(token, vehiculo, id):Observable<any>{
		let json = 	JSON.stringify(vehiculo);
		let headers = new HttpHeaders().set('Content-Type', 'application/json')
										.set('Authorization', 'Bearer '+token);

		return this._http.put(this.url + 'vehiculos/'+id, json, {headers: headers});


	}

	deleteTransporte(token, id):Observable<any>{

		let headers = new HttpHeaders().set('Content-Type', 'application/json')
										.set('Authorization', 'Bearer '+token);

		return this._http.delete(this.url + 'vehiculos/'+id, {headers: headers});

		
	}


}