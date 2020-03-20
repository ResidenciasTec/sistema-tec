import { Component, OnInit } from '@angular/core';
import { EventoService } from "../../services/evento.service";

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss'],
  providers: [EventoService]
})
export class EventosComponent implements OnInit {
  public title:string;

  constructor(
  	private _eventoService: EventoService,
  	) { 
    this.title = "pagina de eventos";
  }

  ngOnInit(): void {
  }

}
