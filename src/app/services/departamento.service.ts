import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Departamento} from "../models/departamento";
import {global} from "./global";

@Injectable()
export class departamentoService{
	public url: string;

	constructor(
		public _http: HttpClient
		)
	{
		this.url = global.url;

	}

	getDepartamentos(token):Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/json')
									   .set('Authorization', 'Bearer '+token);

		return this._http.get(this.url + 'departamentos', {headers: headers});


	}

	getDepartamento(token, id):Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/json')
									   .set('Authorization', 'Bearer '+token);

		return this._http.get(this.url + 'departamentos/'+id, {headers: headers});
 

	}

	createDepartamento(token, departamento):Observable<any>{
		let json = JSON.stringify(departamento);
		let headers = new HttpHeaders().set('Content-Type', 'application/json')
									   .set('Authorization', 'Bearer '+token);

		return this._http.post(this.url + 'departamentos', json, {headers: headers});


	}

	updateDepartamento(token, departamento, id):Observable<any>{
		let json = JSON.stringify(departamento);
		let headers = new HttpHeaders().set('Content-Type', 'application/json')
									   .set('Authorization', 'Bearer '+token);

		return this._http.put(this.url + 'departamentos/'+id, json, {headers: headers});


	}

	deleteDepartamento(token, id):Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/json')
									   .set('Authorization', 'Bearer '+token);

		return this._http.delete(this.url + 'departamentos/'+id, {headers: headers});

		
	}


}