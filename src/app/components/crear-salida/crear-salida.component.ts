import { Component, OnInit } from '@angular/core';
import { Salida } from '../../models/salida';
import { SalidaService } from "../../services/salida.service";

@Component({
  selector: 'app-crear-salida',
  templateUrl: './crear-salida.component.html',
  styleUrls: ['./crear-salida.component.scss'],
  providers: [SalidaService]
})
export class CrearSalidaComponent implements OnInit {
	public salida: Salida;

  constructor(
  	  	private _salidaService: SalidaService,
  	) 
  {
  	this.salida = new Salida(1, 1 , 1 ,'','','','','','',''); 
  }

  ngOnInit(): void {
  }

}
