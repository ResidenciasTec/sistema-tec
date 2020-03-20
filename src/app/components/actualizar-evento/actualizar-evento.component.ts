import { Component, OnInit } from '@angular/core';
import { Evento } from '../../models/evento';
import { EventoService } from "../../services/evento.service";

@Component({
  selector: 'app-actualizar-evento',
  templateUrl: './actualizar-evento.component.html',
  styleUrls: ['./actualizar-evento.component.scss'],
  providers: [EventoService]
})
export class ActualizarEventoComponent implements OnInit {
  public evento: Evento;

  constructor(
  	private _eventoService: EventoService,
  	) 
  {
  	this.evento = new Evento(1, 1 , 1 ,'','','','','','','','');  
  }

  ngOnInit(): void {
  }

}
