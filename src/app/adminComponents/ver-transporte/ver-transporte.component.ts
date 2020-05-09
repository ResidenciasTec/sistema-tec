import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router";
import {TransporteService} from "../../services/transporte.service"
import {variableService} from "../../services/variables.service"
import {statusVehiculoService} from "../../services/statusvehiculo.service"
import {ToastrService} from "ngx-toastr";
import { NgxSpinnerService } from "ngx-spinner";
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-ver-transporte',
  templateUrl: './ver-transporte.component.html',
  styleUrls: ['./ver-transporte.component.scss'],
  providers: [TransporteService, variableService, statusVehiculoService]
})
export class VerTransporteComponent implements OnInit {
  textoCrear: string;
  token: any;
  vehiculo: any;
  vehiculos: any;

  constructor(
    private _transporteService: TransporteService,
    private _variableService: variableService,
    private _toastr: ToastrService,
    private _statusvehiucloService: statusVehiculoService,
    private _spinner: NgxSpinnerService,
    private _router: Router,
    private _route: ActivatedRoute,
  ) {
    this.textoCrear = "todos los vehiculos"
    this.token = this._variableService.getToken();
   }

  ngOnInit(): void {
    window.scrollTo(0,0);
    this.getTransporte();
  }

  getTransporte(){

    this._route.params.subscribe(params => {

      let id = +params['id'];
      this._spinner.show();

      this._transporteService.getTransporte(this.token, id).subscribe(
        response =>{
          if(response.status == 'success'){
            this.vehiculo = response.elementos;
            this._spinner.hide();
            this.getTransportes();
          }else{
            this._spinner.hide();
            console.log('errores');
          }

        },
        error =>{
          this._spinner.hide();
          console.log('error');
        }
      );
    });
  }

  getTransportes(){

      this._spinner.show();

      this._transporteService.getTransportes(this.token).subscribe(
        response =>{
          if(response.status == 'success'){
            this.vehiculos = response.elementos;
            localStorage.setItem('transportes', JSON.stringify(this.vehiculos));
            this._spinner.hide();
          }else{
            this._spinner.hide();
            console.log('errores');
          }

        },
        error =>{
          this._spinner.hide();
          console.log('error');
        }
      );   
  }

}
