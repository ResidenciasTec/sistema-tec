import { Component, OnInit } from '@angular/core';
import {variableService} from "../../services/variables.service"
import {EventoService} from "../../services/evento.service"
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss'],
  providers: [EventoService, variableService]
})
export class EventosComponent implements OnInit {
  public title:string;
  public textoCrear: string;
  public token: any;
  public eventos;
  public total;
  public last_page;
  public current_page;
  public next_page_url;
  public prev_page_url;
  types: string[];
  order: { type: string; };



  constructor(
    private _eventoService: EventoService,
    private _spinner: NgxSpinnerService,
    private _variableService: variableService,
  	
  	) { 
    this.title = "pagina de eventos";
    this.textoCrear = "Solicitudes de eventos"
    this.token = this._variableService.getToken();
    this.types = [ 'mas recientes', 'mas antiguos', 'por mes', 'por estado' ];
      
    this.order = {
      type: 'type1'          
  }; 

  }

  ngOnInit(): void {
    window.scrollTo(0,0);
    this.getEventos();

    }


    getEventos(){
      this._spinner.show();
      this._eventoService.getEventos(this.token).subscribe(
        response => {
          if(response.status == 'success'){
            this.eventos = response.elementos.data;
            localStorage.setItem('eventos',JSON.stringify(response.elementos.data));
            this.total = response.elementos.total;
            this.last_page = response.elementos.last_page;
            this.current_page = response.elementos.current_page;
            this.next_page_url = response.elementos.next_page_url;
            this.prev_page_url = response.elementos.prev_page_url;
            window.scrollTo(0,0);
            this._spinner.hide();

          }else{
            this._spinner.hide();

          }

        },
        error => {
          this._spinner.hide();

        }
      )
      
    }

    nextPage(){
      this._spinner.show();
      this._eventoService.getNextPage(this.token, this.next_page_url ).subscribe(
        response => {
          console.log('si entra')
          if(response.status == 'success'){
            this.eventos = response.elementos.data;
            this.total = response.elementos.total;
            this.last_page = response.elementos.last_page;
            this.current_page = response.elementos.current_page;
            this.next_page_url = response.elementos.next_page_url;
            this.prev_page_url = response.elementos.prev_page_url;
            window.scrollTo(0,0);
            this._spinner.hide();

          }else{
            console.log('entra y se regresa')
            this._spinner.hide();

          }

        },
        error => {
          console.log('no entra')
          console.log(<any>error)
          this._spinner.hide();

        }

      );
    }

    previousPage(){
      this._spinner.show();
      this._eventoService.getNextPage(this.token, this.prev_page_url ).subscribe(
        response => {
          console.log('si entra')
          if(response.status == 'success'){
            this.eventos = response.elementos.data;
            this.total = response.elementos.total;
            this.last_page = response.elementos.last_page;
            this.current_page = response.elementos.current_page;
            this.next_page_url = response.elementos.next_page_url;
            this.prev_page_url = response.elementos.prev_page_url;
            window.scrollTo(0,0);
            this._spinner.hide();

          }else{
            console.log('entra y se regresa')
            this._spinner.hide();

          }

        },
        error => {
          console.log('no entra')
          console.log(<any>error)
          this._spinner.hide();

        }

      );
    }

    getAntiguos(){
      this._spinner.show();
      this._eventoService.getAntiguo(this.token).subscribe(
        response => {  

            this._spinner.hide();
               

        },
        error => {
          this._spinner.hide();
        }
      )

    }


  
    getPorMes(){
  
    }
  
    getPorStatus(){
  
    }

    getOptions(value){
      let data = this.order.type=value;
  
      switch(data){
        case 'mas recientes':
          this.getEventos();
        break;
  
        case 'mas antiguos':
          this.getAntiguos();
        break;
  
        case 'por mes':
          this.getPorMes();
        break;

        case 'por status':
          this.getPorStatus();
        break;
  
      }
  
    }


    
  

}
