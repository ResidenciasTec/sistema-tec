import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {global} from "./global";

@Injectable()
export class CargoService{
	public url: string;

	constructor(
		public _http: HttpClient
		)
	{
		this.url = global.url;

	}

	getCargos(token):Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/json')
									   .set('Authorization', 'Bearer '+token);

		return this._http.get(this.url + 'cargos', {headers: headers});


	}

	getCargo(token, id):Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/json')
									   .set('Authorization', 'Bearer '+token);

		return this._http.get(this.url + 'cargos/'+id, {headers: headers});
 

	}

	createCargo(token, cargo):Observable<any>{
		let json = JSON.stringify(cargo);
		let headers = new HttpHeaders().set('Content-Type', 'application/json')
									   .set('Authorization', 'Bearer '+token);

		return this._http.post(this.url + 'cargos', json, {headers: headers});


	}

	updateCargo(token, cargo, id):Observable<any>{
		let json = JSON.stringify(cargo);
		let headers = new HttpHeaders().set('Content-Type', 'application/json')
									   .set('Authorization', 'Bearer '+token);

		return this._http.put(this.url + 'cargos/'+id, json, {headers: headers});


	}

	deleteCargo(token, id):Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/json')
									   .set('Authorization', 'Bearer '+token);

		return this._http.delete(this.url + 'departamentos/'+id, {headers: headers});

		
	}


}