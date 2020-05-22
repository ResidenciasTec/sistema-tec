import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders}  from "@angular/common/http";
import {Observable} from "rxjs";
import {global} from "./global";

@Injectable()
export class variableService{
	public url: string;
	public identity;
	public token;

	constructor(
		public _http: HttpClient
		)
	{
		this.url = global.url;
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

	getNextPage(token, link):Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/json')
										.set('Authorization', 'Bearer '+token);

		return this._http.get(link, {headers: headers});
	}

}