import { Component, OnInit } from '@angular/core';
import { Salida } from '../../models/salida';
import { SalidaService } from "../../services/salida.service";

@Component({
  selector: 'app-actualizar-salida',
  templateUrl: './actualizar-salida.component.html',
  styleUrls: ['./actualizar-salida.component.scss'],
  providers: [SalidaService]
})
export class ActualizarSalidaComponent implements OnInit {
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
