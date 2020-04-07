import { Component, OnInit } from '@angular/core';
import {TransporteService} from "../services/transporte.service";
import {departamentoService} from "../services/departamento.service";
import {lugarService} from "../services/lugar.service";
import {StatusorderService} from "../services/statusorder.service";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
  providers: [TransporteService, departamentoService, lugarService, StatusorderService],
})
export class InicioComponent implements OnInit {
  public title:string;
  identity: any;
  token: any;
  transportes;
  statusorders: any;
  departamentos: any;
  espacios: any;

  constructor(
    private _transporteService: TransporteService,
    private _departamentoService: departamentoService,
    private _lugarService: lugarService,
    private _statusorderService: StatusorderService,
  ) {
    this.title = "Sistema de control de inventarios del Instituto Tecnologico de Matamoros";
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

}
