import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Evento} from "../models/ubicacion";
import {global} from "./global";

@Injectable()
export class ubicacionService{
	public url: string;

	constructor(
		public _http: HttpClient
		)
	{
		this.url = global.url;

	}

	getUbicaciones(){

	}

	getUbicacion(){

	}

	createUbicacion(){

	}

	updateUbicacion(){

	}

	deleteUbicacion(){
		
	}
}