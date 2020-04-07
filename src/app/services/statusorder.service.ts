import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {global} from "./global";

@Injectable()
export class StatusorderService{
	public url: string;

	constructor(
		public _http: HttpClient
		)
	{
		this.url = global.url;

	}

	getServicios(token):Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/json')
									   .set('Authorization', 'Bearer '+token);

		return this._http.get(this.url + 'statusorders', {headers: headers});


	}

	getServicio(token, id):Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/json')
									   .set('Authorization', 'Bearer '+token);

		return this._http.get(this.url + 'statusorders/'+id, {headers: headers});


	}

	createServicio(token, departamento):Observable<any>{
		let json = JSON.stringify(departamento);
		let params = 'json='+json;
		let headers = new HttpHeaders().set('Content-Type', 'application/json')
									   .set('Authorization', 'Bearer '+token);

		return this._http.post(this.url + 'statusorders', {headers: headers});


	}

	updateServicio(token, departamento, id):Observable<any>{
		let json = JSON.stringify(departamento);
		let params = 'json='+json;
		let headers = new HttpHeaders().set('Content-Type', 'application/json')
									   .set('Authorization', 'Bearer '+token);

		return this._http.put(this.url + 'statusorders/'+id, params, {headers: headers});


	}

	deleteServicio(token, id):Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/json')
									   .set('Authorization', 'Bearer '+token);

		return this._http.delete(this.url + 'statusorders/'+id, {headers: headers});

		
	}


}