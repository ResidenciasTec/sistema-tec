import { Component, OnInit } from '@angular/core';
import {TransporteService} from "../services/transporte.service";
import {departamentoService} from "../services/departamento.service";
import {lugarService} from "../services/lugar.service";
import {StatusorderService} from "../services/statusorder.service";
import { EventoService } from '../services/evento.service';
import { MantenimientoService} from "../services/mantenimiento.service";
import { SalidaService } from "../services/salida.service";
import {PermisoService} from "../services/permiso.service";
import {CargoService} from "../services/cargo.service";
import { NgxSpinnerService } from "ngx-spinner";


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
  providers: [TransporteService, departamentoService, CargoService, lugarService, StatusorderService, EventoService, MantenimientoService, SalidaService, PermisoService],
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
  public mantenimientos;
  public eventos;
  public salidas;
  public replace;




  constructor(
    private _transporteService: TransporteService,
    private _departamentoService: departamentoService,
    private _lugarService: lugarService,
    private _statusorderService: StatusorderService,
    private _eventoService: EventoService, 
    private _mantenimientoService: MantenimientoService,
    private _salidaService: SalidaService,
    private _permisoService: PermisoService,
    private _cargoService: CargoService,
    private _spinner: NgxSpinnerService,
  ) {
    this.title = "Sistema de control de inventarios del Instituto Tecnologico de Matamoros";
   }

  ngOnInit(): void {
    window.scrollTo(0,0);

      

    if(localStorage.getItem('identity')){
      this.identity = JSON.parse(localStorage.getItem('identity'));
     
    }

    if(localStorage.getItem('token')){
      this.token = localStorage.getItem('token');
   
    }

      this.forms();
      this.getPermiso();
      this.getEventos();
      this.getSalidas();
      this.getMantenimientos();
      this.getCargos();

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
        this.departamentos = response.elementos.data;
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
    this._spinner.show();
    this._eventoService.getEventos(this.token).subscribe(
      response => {
        console.log(response);
        if(response.status = 'success'){
          this.eventos  = response.elementos.data;
          localStorage.setItem('eventos', JSON.stringify(this.eventos));
          this.eventos = JSON.parse(localStorage.getItem('eventos'));

          let eventoCrudo = JSON.parse(localStorage.getItem('eventos'));

          this.eventos = eventoCrudo.slice(0, 6);


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
          let respuesta  = response.elementos.data;
          localStorage.setItem('mantenimientos', JSON.stringify(respuesta));
          this.mantenimientos = JSON.parse(localStorage.getItem('mantenimientos'));

          let mantenimientoCrudo = JSON.parse(localStorage.getItem('mantenimientos'));

          this.mantenimientos = mantenimientoCrudo.slice(0, 6);
          this._spinner.hide();
        

        }else{

        }

      },
      error => {
        console.log(<any>error);

      }

    );
  }
   
  getPermiso(){
    this._permisoService.byUser(this.token, this.identity.id).subscribe(
      response => {
        if(response.status == 'success'){
          let respuesta  = response.elementos;
          localStorage.setItem('privilegios', JSON.stringify(response.elementos[0]));
        }else{
          localStorage.setItem('no-privilegios', "el usuario no tiene los privilegios necesarios para ver esta informacion");
        }

      },
      error =>{
        console.log(<any>error);
      }
    )
  }

  getCargos(){
    this._cargoService.getCargos(this.token).subscribe(
      response => {
        if(response.status == 'success'){
          localStorage.setItem('cargos', JSON.stringify(response.cargos));
        }

      },
      error =>{
        console.log(<any>error);
      }
    )
  }

  getSalidas(){
    this._salidaService.getSalidas(this.token).subscribe(
      response => {
        console.log(response);
        if(response.status = 'success'){
          let respuesta  = response.elementos.data;
          localStorage.setItem('salidas', JSON.stringify(respuesta));
          this.salidas = JSON.parse(localStorage.getItem('salidas'));

          let salidaCrudo = JSON.parse(localStorage.getItem('salidas'));

          this.salidas = salidaCrudo.slice(0, 6);

        }else{

        }

      },
      error => {
        console.log(<any>error);
      
      }

    );
  }  



  forms(){

    if(localStorage.getItem('vehiculos')){
      this.transportes = JSON.parse(localStorage.getItem('vehiculos')); 
    }else{
      this.getTransportes(this.token);
    }

    if(localStorage.getItem('departamentos')){
      this.departamentos = JSON.parse(localStorage.getItem('departamentos'));
    }else{
      this.getDepartamentos(this.token);
    }

    if(localStorage.getItem('espacios')){
      this.espacios = JSON.parse(localStorage.getItem('espacios'));
    }else{
      this.getEspacios(this.token);
    }

    if(localStorage.getItem('servicios')){
      this.statusorders = JSON.parse(localStorage.getItem('servicios'));
    }else{
      this.getServicios(this.token);
    }
  }

}
