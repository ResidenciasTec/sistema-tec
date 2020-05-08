import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { EventoService } from "../../services/evento.service";
import { NgxSpinnerService } from "ngx-spinner";
import * as moment from 'moment';
import 'moment/locale/es';


@Component({
  selector: 'app-ver-evento',
  templateUrl: './ver-evento.component.html',
  styleUrls: ['./ver-evento.component.scss'],
  providers: [EventoService]
})
export class VerEventoComponent implements OnInit {
  public token;
  evento: any;
  nombreEvento: any;
  eventos;
  departamento: any;
  espacio: any;
  usuario: any;
  textoCrear: any;
  fecha;
  fechados;
  departamento_text;
  user_text;
  evento_text;

  constructor(
    private _router: Router,
		private _route: ActivatedRoute,
    private _eventoService: EventoService,
    private _spinner: NgxSpinnerService,
  	) {
      this.textoCrear = "solicitud seleccionada",
      this.departamento_text = "pedido por el departamento:";
      this.user_text = "creado por el usuario:";
      this.evento_text = "lugar del evento";
     }

  ngOnInit(): void {
    window.scrollTo(0,0);
    this.token = localStorage.getItem('token');
    this.lastEvents();
    this.getEvento();
  
    
    
  }

  getEvento(){
    
    this._route.params.subscribe(params => {

      let id = +params['id'];
      this._spinner.show();

      this._eventoService.getEvento(this.token, id).subscribe(
        response =>{
          console.log(response);

          if(response.status == 'success'){
            this.evento = response.elemento;
            this.textoCrear = this.evento.evento;
            this._spinner.hide();
            window.scrollTo(0,0);


            console.log(response.elemento);

            console.log('todo ha salido bien');
            this.nombreEvento = this.evento.evento;
            console.log(this.nombreEvento);
            this.fechados = moment(this.evento.fecha, 'YYYY-MM-DD')
            this.fecha = moment(this.fechados).format('DD [de] MMMM [del] YYYY');
          }else{
            console.log('algo ha salido mal');
          }
  
        },
        error =>{
          console.log(<any>error);
  
        }
  
  
      );


    });

  }

  lastEvents(){
    let crudo = JSON.parse(localStorage.getItem('eventos'));
    this.eventos = crudo.reverse().slice(0, 7);

  }

}
