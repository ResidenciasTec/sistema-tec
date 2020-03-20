import { Component, OnInit } from '@angular/core';
import { EventoService } from "../../services/evento.service";

@Component({
  selector: 'app-ver-evento',
  templateUrl: './ver-evento.component.html',
  styleUrls: ['./ver-evento.component.scss'],
  providers: [EventoService]
})
export class VerEventoComponent implements OnInit {

  constructor(
  	private _eventoService: EventoService,
  	) { }

  ngOnInit(): void {
  }

}
