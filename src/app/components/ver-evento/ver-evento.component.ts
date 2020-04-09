import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { EventoService } from "../../services/evento.service";


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

  constructor(
    private _router: Router,
		private _route: ActivatedRoute,
  	private _eventoService: EventoService,
  	) { }

  ngOnInit(): void {
    window.scrollTo(0,0);
    this.token = localStorage.getItem('token');
    this.lastEvents();
    this.getEvento();
    
    
  }

  getEvento(){
    this._route.params.subscribe(params => {

      let id = +params['id'];

      this._eventoService.getEvento(this.token, id).subscribe(
        response =>{
          console.log(response);

          if(response.status == 'success'){
            this.evento = response.elemento;


            console.log(response.elemento);

            console.log('todo ha salido bien');
            this.nombreEvento = this.evento.evento;
            console.log(this.nombreEvento);
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
