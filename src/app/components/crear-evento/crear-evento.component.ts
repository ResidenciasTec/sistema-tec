import { Component, OnInit } from '@angular/core';
import { Evento } from '../../models/evento';
import { EventoService } from "../../services/evento.service";

@Component({
  selector: 'app-crear-evento',
  templateUrl: './crear-evento.component.html',
  styleUrls: ['./crear-evento.component.scss'],
  providers: [EventoService]
})
export class CrearEventoComponent implements OnInit {
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
