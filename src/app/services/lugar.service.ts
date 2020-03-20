import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Lugar} from "../models/lugar";
import {global} from "./global";

@Injectable()
export class lugarService{
	public url: string;

	constructor(
		public _http: HttpClient
		)
	{
		this.url = global.url;

	}

	getLugares():Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

		return this._http.get(this.url + 'lugares', {headers: headers});

	}


	getLugar(id):Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

		return this._http.get(this.url + 'lugares/'+id, {headers: headers});


	}

	createLugar(token, lugar):Observable<any>{
		let json = JSON.stringify(lugar);
		let params = 'json='+json;
		let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
				  				       .set('Authorization', token);

		return this._http.post(this.url + 'lugares', params, {headers: headers});


	}

	updateLugar(token, lugar, id):Observable<any>{
		let json = JSON.stringify(lugar);
		let params = 'json='+json;
		let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
				  					   .set('Authorization', token);

		return this._http.put(this.url + 'lugares/'+id, params, {headers: headers});

	}

	deleteLugar(token, id):Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
				  					   .set('Authorization', token);

		return this._http.delete(this.url + 'lugares/'+id, {headers: headers});

		
	}
}