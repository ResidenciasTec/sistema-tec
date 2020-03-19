import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Evento} from "../models/lugar";
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

	getLugares(){

	}

	getLugar(id){

	}

	createLugar(){

	}

	updateLugar(){

	}

	deleteLugar(){
		
	}
}