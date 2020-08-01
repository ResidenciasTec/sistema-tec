import { Component, OnInit } from '@angular/core';
import {variableService} from "../../services/variables.service"
import { Router, ActivatedRoute, Params } from "@angular/router";
import {ToastrService} from "ngx-toastr";
import { NgxSpinnerService } from "ngx-spinner";
import { statusVehiculoService } from 'src/app/services/statusvehiculo.service';

@Component({
  selector: 'app-statusvehiculos',
  templateUrl: './statusvehiculos.component.html',
  styleUrls: ['./statusvehiculos.component.scss'],
  providers: [statusVehiculoService, variableService]
})
export class StatusvehiculosComponent implements OnInit {

  textoCrear: String;
  token;
  statusvehiculos;

  constructor(    
    private _statusvehiculoService: statusVehiculoService,
    private _variableService: variableService,    
    private _toastr: ToastrService,
    private _router: Router,
    private _route: ActivatedRoute,
    private _spinner: NgxSpinnerService
    ) {       
      this.textoCrear = "status de los vehiculos"
      this.token = this._variableService.getToken();  
    }

  ngOnInit(): void {
    window.scrollTo(0,0);
    this.getSubdirecciones();
  }

  getSubdirecciones(){
    this._spinner.show();
    this._statusvehiculoService.getStatusvehiculos(this.token).subscribe(
      response => {
        if(response.status == 'success'){
           console.log('ha entrado al sucess');
          this.statusvehiculos = response.elementos;
          localStorage.setItem('statusvehiculos', JSON.stringify(this.statusvehiculos));
          this._spinner.hide();

        }else{
          this._spinner.hide();
          console.log('errores');

        }

      },
      error => {
        this._spinner.hide();
        console.log(<any>error);

      }
    )
  }

}












  
