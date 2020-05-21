import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders}  from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../models/user";
import {global} from "./global";

@Injectable()
export class UserService{
	public url: string;
	public identity;
	public token;

	constructor(
		public _http: HttpClient
		)
	{
		this.url = global.url;
	}

	test(){
		return "hola mundo desde un servicio";
	}

	
	getUsers(token): Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/json')
									   .set('Authorization', 'bearer '+token);

		return this._http.get(this.url+'users', {headers: headers});
	}

	register(user): Observable<any>{
		let json = JSON.stringify(user);
		let headers = new HttpHeaders().set('Content-Type', 'application/json');

		return this._http.post(this.url+'register', json, {headers: headers});
	}

	signup(user): Observable<any>{

		let json = JSON.stringify(user);
		let headers = new HttpHeaders().set('Content-Type', 'application/json').set('cors', 'Access-Control-Allow-Origin');

		return this._http.post(this.url+'login', json, {headers: headers});
	}

	update(token, user, id): Observable<any>{
		let json = JSON.stringify(user);
		let headers = new HttpHeaders().set('Content-Type', 'application/json')
									   .set('Authorization', 'bearer '+token);

		return this._http.put(this.url+'update/'+id, json, {headers: headers});
	}

	detalle(id): Observable<any>{

		let headers = new HttpHeaders().set('Content-Type', 'application/json');

		return this._http.get(this.url+'detail/'+id,  {headers: headers});
	}

	getIdentity(){
		let identity = JSON.parse(localStorage.getItem('identity'));

		if(identity && identity != "undefined"){
			this.identity = identity;
		}else{
			this.identity = null;
		}
		return this.identity;
	}

	getToken(){
		let token = localStorage.getItem('token');

		if(token && token != "undefined"){
			this.token = token;
		}else{
			this.token = null;
		}

		return this.token;

	}

}