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

	getDepartamentos():Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

		return this._http.get(this.url + 'departamentos', {headers: headers});


	}

	getDepartamento(id):Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

		return this._http.get(this.url + 'departamentos/'+id, {headers: headers});


	}

	createDepartamento(token, departamento):Observable<any>{
		let json = JSON.stringify(departamento);
		let params = 'json='+json;
		let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
		 						       .set('Authorization', token);

		return this._http.post(this.url + 'departamentos', {headers: headers});


	}

	updateDepartamento(token, departamento, id):Observable<any>{
		let json = JSON.stringify(departamento);
		let params = 'json='+json;
		let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
		  						       .set('Authorization', token);

		return this._http.put(this.url + 'departamentos/'+id, params, {headers: headers});


	}

	deleteDepartamento(token, id):Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
		 						       .set('Authorization', token);

		return this._http.delete(this.url + 'departamentos/'+id, {headers: headers});

		
	}


}