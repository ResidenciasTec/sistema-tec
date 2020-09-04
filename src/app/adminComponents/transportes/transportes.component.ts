import { Component, OnInit } from '@angular/core';
import {TransporteService} from "../../services/transporte.service"
import {variableService} from "../../services/variables.service"
import {statusVehiculoService} from "../../services/statusvehiculo.service"
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from "@angular/router";
import {ToastrService} from "ngx-toastr";
import { NgxSpinnerService } from "ngx-spinner";
 
@Component({
  selector: 'app-transportes',
  templateUrl: './transportes.component.html',
  styleUrls: ['./transportes.component.scss'],
  providers: [TransporteService, variableService, statusVehiculoService]
})
export class TransportesComponent implements OnInit {
  textoCrear: String;
  token;
  transportes;
  statusvehiculos: any;
  dataVehiculo: any


  constructor(
    private _transporteService: TransporteService,
    private _variableService: variableService,
    private _formBuilder: FormBuilder,
    private _toastr: ToastrService,
    private _statusvehiucloService: statusVehiculoService,
    private _router: Router,
    private _route: ActivatedRoute,
    private _spinner: NgxSpinnerService,
    

  ) {
    this.textoCrear = "Todos los Vehículos"
    this.token = this._variableService.getToken();
   }

  ngOnInit(): void {
    window.scrollTo(0,0);
    this.getTransportes();
    this.getStatusvehiculos();

  }
 

  getTransportes(){
    this._spinner.show();
    this._transporteService.getTransportes(this.token).subscribe(
      response =>{
        if(response.status == 'success'){
          this.transportes = response.elementos;
          localStorage.setItem('transportes', JSON.stringify(this.transportes));
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
    )
  }

  getStatusvehiculos(){
    this._statusvehiucloService.getStatusvehiculos(this.token).subscribe(
      response => {
        if(response.status == 'success'){
          this.statusvehiculos = response.elementos;
          localStorage.setItem('statusvehiculos', JSON.stringify(this.statusvehiculos));

        }else{
          console.log('errores');

        }

      },
      error => {
        console.log('error');

      }
    )

  }

}
