import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {global} from "./global";

@Injectable()
export class statusVehiculoService{
	public url: string;

	constructor(
		public _http: HttpClient
		)
	{
		this.url = global.url;

	}

	getStatusvehiculos(token):Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/json')
									   .set('Authorization', 'Bearer '+token);

		return this._http.get(this.url + 'statusvehiculos', {headers: headers});


	}

	getStatusvehiculo(token, id):Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/json')
									   .set('Authorization', 'Bearer '+token);

		return this._http.get(this.url + 'statusvehiculos/'+id, {headers: headers});


	}

	createStatusvehiculo(token, status):Observable<any>{
		let json = JSON.stringify(status);
		let params = 'json='+json;
		let headers = new HttpHeaders().set('Content-Type', 'application/json')
									   .set('Authorization', 'Bearer '+token);

		return this._http.post(this.url + 'statusvehiculos', {headers: headers});


	}

	updateStatusvehiculo(token, status, id):Observable<any>{
		let json = JSON.stringify(status);
		let params = 'json='+json;
		let headers = new HttpHeaders().set('Content-Type', 'application/json')
									   .set('Authorization', 'Bearer '+token);

		return this._http.put(this.url + 'statusvehiculos/'+id, params, {headers: headers});


	}

	deleteStatusvehiculo(token, id):Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/json')
									   .set('Authorization', 'Bearer '+token);

		return this._http.delete(this.url + 'statusvehiculos/'+id, {headers: headers});

		
	}


}