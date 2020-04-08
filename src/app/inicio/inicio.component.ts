import { Component, OnInit } from '@angular/core';
import {TransporteService} from "../services/transporte.service";
import {departamentoService} from "../services/departamento.service";
import {lugarService} from "../services/lugar.service";
import {StatusorderService} from "../services/statusorder.service";
import { EventoService } from '../services/evento.service';
import { MantenimientoService} from "../services/mantenimiento.service";
import { SalidaService } from "../services/salida.service";


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
  providers: [TransporteService, departamentoService, lugarService, StatusorderService, EventoService, MantenimientoService, SalidaService],
})
export class InicioComponent implements OnInit {
  public title:string;
  identity: any;
  token: any;
  transportes;
  statusorders: any;
  departamentos: any;
  espacios: any;
  loading;
  mantenimientos: any;



  constructor(
    private _transporteService: TransporteService,
    private _departamentoService: departamentoService,
    private _lugarService: lugarService,
    private _statusorderService: StatusorderService,
    private _eventoService: EventoService, 
    private _mantenimientoService: MantenimientoService,
    private _salidaService: SalidaService,
  ) {
    this.title = "Sistema de control de inventarios del Instituto Tecnologico de Matamoros";
    this.loading = true;
   }

  ngOnInit(): void {
    window.scrollTo(0,0);

    if(localStorage.getItem('identity')){
      this.identity = JSON.parse(localStorage.getItem('identity'));
      console.log(this.identity);
    }

    if(localStorage.getItem('token')){
      this.token = localStorage.getItem('token');
      console.log(this.token);
    }

    if(!localStorage.getItem('vehiculos') && this.token){

      this.getTransportes(this.token);
    }

    if(!localStorage.getItem('departamentos') && this.token){

      this.getDepartamentos(this.token);
    }

    if(!localStorage.getItem('espacios') && this.token){

      this.getEspacios(this.token);
    }

    if(!localStorage.getItem('servicios') && this.token){

      this.getServicios(this.token);
    }

    this.getEventos();
    this.getMantenimientos();
    this.getSalidas();
  }

  getTransportes(token){
    this._transporteService.getTransportes(token).subscribe(
      response => {
        console.log(response);
        this.transportes = response.elementos;
        console.log(this.transportes);

        localStorage.setItem('vehiculos', JSON.stringify(this.transportes));

      },
      error => {
        console.log(error);
        console.log(JSON.stringify(this.token));
      }
      
    );

  }

  getEspacios(token){
    this._lugarService.getLugares(token).subscribe(
      response => {
        console.log(response);
        this.espacios = response.elementos;
        console.log(this.espacios);

        localStorage.setItem('espacios', JSON.stringify(this.espacios));

      },
      error => {
        console.log(error);
        console.log(JSON.stringify(this.token));
      }
      
    );

  }

  getServicios(token){
    this._statusorderService.getServicios(token).subscribe(
      response => {
        console.log(response);
        this.statusorders = response.elementos;
        console.log(this.statusorders);

        localStorage.setItem('statusorders', JSON.stringify(this.statusorders));

      },
      error => {
        console.log(error);
        console.log(JSON.stringify(this.token));
      }
      
    );

  }

  getDepartamentos(token){
    this._departamentoService.getDepartamentos(token).subscribe(
      response => {
        console.log(response);
        this.departamentos = response.elementos;
        console.log(this.departamentos);

        localStorage.setItem('departamentos', JSON.stringify(this.departamentos));

      },
      error => {
        console.log(error);
        console.log(JSON.stringify(this.token));
      }
      
    );

  }

  getEventos(){
    this._eventoService.getEventos(this.token).subscribe(
      response => {
        console.log(response);
        if(response.status = 'success'){
          let respuesta  = response.elementos;
          localStorage.setItem('eventos', JSON.stringify(respuesta));
          this.loading = false;
        }else{

        }

      },
      error => {
        console.log(<any>error);

      }

    );
  }

  getMantenimientos(){
    this._mantenimientoService.getMantenimientos(this.token).subscribe(
      response => {
        console.log(response);
        if(response.status = 'success'){
          let respuesta  = response.elementos;
          localStorage.setItem('mantenimientos', JSON.stringify(respuesta));

        }else{

        }

      },
      error => {
        console.log(<any>error);

      }

    );
  }

  getSalidas(){
    this._salidaService.getSalidas(this.token).subscribe(
      response => {
        console.log(response);
        if(response.status = 'success'){
          let respuesta  = response.elementos;
          localStorage.setItem('salidas', JSON.stringify(respuesta));

        }else{

        }

      },
      error => {
        console.log(<any>error);

      }

    );
  }  

}
