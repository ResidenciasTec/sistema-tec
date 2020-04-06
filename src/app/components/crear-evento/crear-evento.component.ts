import { Component, OnInit } from '@angular/core';
import { Evento } from '../../models/evento';
import { EventoService } from "../../services/evento.service";
import { lugarService } from "../../services/lugar.service";

@Component({
  selector: 'app-crear-evento',
  templateUrl: './crear-evento.component.html',
  styleUrls: ['./crear-evento.component.scss'],
  providers: [EventoService, lugarService]
})
export class CrearEventoComponent implements OnInit {
	public evento: Evento;
  public lugares;
  public token;
  public identity;
  public status;
  public textoCrear: String;



  constructor(
  	  	private _eventoService: EventoService,
        private _lugarService: lugarService,
  	)
  	{
  	    this.evento = new Evento(1, 1 , 1 ,'','','','','','','','');
        this.token = localStorage.getItem("token");
        this.identity = localStorage.getItem("identity");
        this.textoCrear = "Crear una solicitud de evento";
  	}

  ngOnInit(): void {
    window.scrollTo(0,0);
    this.getLugares();
  }

  getLugares(){
    this._lugarService.getLugares().subscribe(
      response => {
        if(response){
          this.lugares = response.lugares;
        }


      },
      error => {
        console.log(<any>error);

      }
      );
  }

  onSubmit(){
    this._eventoService.crearEvento(this.token, this.evento).subscribe(
      response =>{

        if(response && response.status == 'success'){
          console.log(response);
          this.status = 'success';

        }

      },
      error => {
        console.log(<any>error);
        this.status = 'error';

      }
      )
  }

}
