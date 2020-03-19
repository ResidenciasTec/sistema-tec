import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Evento} from "../models/departamento";
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

	getDepartamentos(){

	}

	getDepartamento(id){

	}

	createDepartamento(){

	}

	updateDepartamento(){

	}

	deleteDepartamento(){
		
	}


}