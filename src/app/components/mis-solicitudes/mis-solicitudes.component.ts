import { Component, OnInit } from '@angular/core';
import {variableService} from "../../services/variables.service"
import {EventoService} from "../../services/evento.service"
import {MantenimientoService} from "../../services/mantenimiento.service"
import {SalidaService} from "../../services/salida.service"
import { NgxSpinnerService } from "ngx-spinner";
import { SalidasComponent } from '../salidas/salidas.component';

@Component({
  selector: 'app-mis-solicitudes',
  templateUrl: './mis-solicitudes.component.html',
  styleUrls: ['./mis-solicitudes.component.scss'],
  providers: [variableService, EventoService, SalidaService, MantenimientoService]
})
export class MisSolicitudesComponent implements OnInit {
public titulo: String;
public title:string;
public textoCrear: string;
public token: any;
public eventos;
public salidas;
public mantenimientos;
public data;
public evento: boolean;
public mantenimiento: boolean;
public salida: boolean;
public total;
public last_page;
public current_page;
public next_page_url;
public prev_page_url;
public identity: any;
types: string[];
order: { type: string; };


  constructor(    
    private _eventoService: EventoService,
    private _MantenimientoService: MantenimientoService,
    private _salidaService: SalidaService,
    private _spinner: NgxSpinnerService,
    private _variableService: variableService
    ) { 
    this.titulo = "Mis solicitudes";
    this.data = 'eventos';
    this.evento = true;
    this.mantenimiento = false;
    this.salida = false;
    this.title = "pagina de eventos";
    this.textoCrear = "mis solicitudes de eventos"
    this.token = this._variableService.getToken();
    this.identity = this._variableService.getIdentity();
    this.types = [ 'eventos', 'mantenimientos', 'salidas' ];

    this.order = {
      type: 'type1'          
  }; 
  }

  ngOnInit(): void {
    window.scrollTo(0,0);
    window.scrollTo(0,0);
    this.getEventos();
  }

  ngDocheck(){
    this.eventos;
  }

  getEventos(){
    this._spinner.show();
    this._eventoService.byUser(this.token, this.identity.id).subscribe(
      response => {
        if(response.status == 'success'){
          if(response.elemento.data){
            this.eventos = response.elemento.data;
          }else{
            this.eventos = "no tienes solicitudes de eventos"
          }
          
          this.total = response.elemento.total;
          this.last_page = response.elemento.last_page;
          this.current_page = response.elemento.current_page;
          this.next_page_url = response.elemento.next_page_url;
          this.prev_page_url = response.elemento.prev_page_url;
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

  getMantenimientos(){
    this._spinner.show();
    this._MantenimientoService.byUser(this.token, this.identity.id).subscribe(
      response => {
        if(response.status == 'success'){
          this.mantenimientos = response.elemento.data;
          this.total = response.elemento.total;
          this.last_page = response.elemento.last_page;
          this.current_page = response.elemento.current_page;
          this.next_page_url = response.elemento.next_page_url;
          this.prev_page_url = response.elemento.prev_page_url;
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

  getSalidas(){
    this._spinner.show();
    this._salidaService.byUser(this.token, this.identity.id).subscribe(
      response => {
        if(response.status == 'success'){
          this.salidas = response.elemento.data;
          this.total = response.elemento.total;
          this.last_page = response.elemento.last_page;
          this.current_page = response.elemento.current_page;
          this.next_page_url = response.elemento.next_page_url;
          this.prev_page_url = response.elemento.prev_page_url;
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

  nextPage(){
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

  getOptions(value){
    let data = this.order.type=value;

    switch(data){
      case 'eventos':
       this.evento = true;
       this.salida = false;
       this.mantenimiento = false;
        this.textoCrear = "mis solicitudes de eventos"
        this.getEventos();
      break;

      case 'salidas':
        this.salida = true;
        this.evento = false;
        this.mantenimiento = false;
        this.textoCrear = "mis solicitudes de salidas"
        this.getSalidas();
      break;

      case 'mantenimientos':
        this.mantenimiento = true;
        this.evento = false;
        this.salida = false;
        this.textoCrear = "mis solicitudes de mantenimiento"
        this.getMantenimientos();
      break;

    }

  }

}


