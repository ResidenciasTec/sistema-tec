import { Component, OnInit } from '@angular/core';
import {variableService} from "../../services/variables.service"
import {EventoService} from "../../services/evento.service"
import { NgxSpinnerService } from "ngx-spinner";
import { global } from "../../services/global";

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
  public global;
  types: string[];
  order: { type: string; };



  constructor(
    private _eventoService: EventoService,
    private _spinner: NgxSpinnerService,
    private _variableService: variableService,
  	
  	) { 
      this.global = global.url;
      this.title = "Página de eventos";
      this.textoCrear = "Solicitudes de eventos"
      this.token = this._variableService.getToken();
      this.types = [ 'Mas recientes', 'Mas antiguos', 'Por mes', 'Por status' ];
        
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
            this.next_page_url = this.changeUrlApi(response.elementos.next_page_url);
            this.prev_page_url = this.changeUrlApi(response.elementos.prev_page_url);
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
            this.next_page_url = this.changeUrlApi(response.elementos.next_page_url);
            this.prev_page_url = this.changeUrlApi(response.elementos.prev_page_url);
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
            this.next_page_url = this.changeUrlApi(response.elementos.next_page_url);
            this.prev_page_url = this.changeUrlApi(response.elementos.prev_page_url);
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
      this._eventoService.getAntiguos(this.token).subscribe(
        response => { 
          if(response.status == 'success'){
            this.eventos = response.elementos.data;
            this.total = response.elementos.total;
            this.last_page = response.elementos.last_page;
            this.current_page = response.elementos.current_page;
            this.next_page_url = this.changeUrlApi(response.elementos.next_page_url);
            this.prev_page_url = this.changeUrlApi(response.elementos.prev_page_url);
            this._spinner.hide();

          } else{
            console.log('entra y se regresa')
            this._spinner.hide();
          }
               

        },
        error => {
          this._spinner.hide();
          console.log(<any>error);

        }
      )

    }


  
    getPorMes(){
      this._spinner.show();
      this._eventoService.getPorMes(this.token).subscribe(
        response => {
          if(response.status == 'success'){
            this.eventos = response.elementos.data;
            this.total = response.elementos.total;
            this.last_page = response.elementos.last_page;
            this.current_page = response.elementos.current_page;
            this.next_page_url = this.changeUrlApi(response.elementos.next_page_url);
            this.prev_page_url = this.changeUrlApi(response.elementos.prev_page_url);
            this._spinner.hide();

          }else{
            console.log('entra y se regresa')
            this._spinner.hide();

          }
          

        },
        error => {
          this._spinner.hide();
          console.log(<any>error);

        }
      )
  
    }
  
    getPorStatus(){
      this._spinner.show();
      this._eventoService.getPorStatus(this.token).subscribe(
        response =>{
          if(response.status == 'success'){
            this.eventos = response.elementos.data;
            this.total = response.elementos.total;
            this.last_page = response.elementos.last_page;
            this.current_page = response.elementos.current_page;
            this.next_page_url = this.changeUrlApi(response.elementos.next_page_url);
            this.prev_page_url = this.changeUrlApi(response.elementos.prev_page_url);
            this._spinner.hide();

          }else{
            console.log('entra y se regresa')
            this._spinner.hide();

          }
          

        },
        error =>{
          this._spinner.hide();
          console.log(<any>error);

        }
      )
  
    }

    getOptions(value){
      let data = this.order.type=value;
  
      switch(data){
        case 'Mas recientes':
          this.getEventos();
        break;
  
        case 'Mas antiguos':
          this.getAntiguos();
        break;
  
        case 'Por mes':
          this.getPorMes();
        break;

        case 'Por status':
          this.getPorStatus();
        break;
  
      }
  
    }

    changeUrlApi(url){

      if(url === null){
        return "";
      }
      const restOfUrl = url.substring(47);
  
      return `${this.global}${restOfUrl}`
    }


    
  

}
