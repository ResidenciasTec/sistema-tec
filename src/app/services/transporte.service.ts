import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Evento} from "../models/transporte";
import {global} from "./global";

@Injectable()
export class TransporteService{
	public url: string;

	constructor(
		public _http: HttpClient
		)
	{
		this.url = global.url;

	}

	getTransportes(){

	}

	getTransporte(id){

	}

	createTransporte(){

	}

	updateTransporte(){

	}

	deleteTransporte(){
		
	}


}