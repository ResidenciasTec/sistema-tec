import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {global} from "./global";

@Injectable()
export class subdireccionService{
	public url: string;

	constructor(
		public _http: HttpClient
		)
	{
		this.url = global.url;

	}

	getSubdirecciones(token):Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/json')
									   .set('Authorization', 'Bearer '+token);

		return this._http.get(this.url + 'subdirections', {headers: headers});


	}

	getSubdireccion(token, id):Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/json')
									   .set('Authorization', 'Bearer '+token);

		return this._http.get(this.url + 'subdirections/'+id, {headers: headers});


	}

	createSubdireccion(token, subdirection):Observable<any>{
		let json = JSON.stringify(subdirection);
		let params = 'json='+json;
		let headers = new HttpHeaders().set('Content-Type', 'application/json')
									   .set('Authorization', 'Bearer '+token);

		return this._http.post(this.url + 'subdirections', {headers: headers});


	}

	updateSubdireccion(token, subdirection, id):Observable<any>{
		let json = JSON.stringify(subdirection);
		let params = 'json='+json;
		let headers = new HttpHeaders().set('Content-Type', 'application/json')
									   .set('Authorization', 'Bearer '+token);

		return this._http.put(this.url + 'subdirections/'+id, params, {headers: headers});


	}

	deleteSubdireccion(token, id):Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/json')
									   .set('Authorization', 'Bearer '+token);

		return this._http.delete(this.url + 'subdirections/'+id, {headers: headers});

		
	}


}