import { Component, OnInit } from '@angular/core';
import {variableService} from "../../services/variables.service"
import {StatusorderService} from "../../services/statusorder.service"
import { Router, ActivatedRoute, Params } from "@angular/router";
import {ToastrService} from "ngx-toastr";
import { NgxSpinnerService } from "ngx-spinner";
import { statusVehiculoService } from 'src/app/services/statusvehiculo.service';

@Component({
  selector: 'app-statusorders',
  templateUrl: './statusorders.component.html',
  styleUrls: ['./statusorders.component.scss'],
  providers: [StatusorderService, variableService]
})
export class StatusordersComponent implements OnInit {

  textoCrear: String;
  token;
  statusorders;

  constructor(
    private _statusorderService: StatusorderService,
    private _variableService: variableService,    
    private _toastr: ToastrService,
    private _router: Router,
    private _route: ActivatedRoute,
    private _spinner: NgxSpinnerService
    ) {    
      this.textoCrear = "status de las solicitudes"
      this.token = this._variableService.getToken();  
    }

  ngOnInit(): void {
    window.scrollTo(0,0);
    this.getSubdirecciones();
  }

  getSubdirecciones(){
    this._spinner.show();
    this._statusorderService.getServicios(this.token).subscribe(
      response => {
        if(response.status == 'success'){
           console.log('ha entrado al sucess');
          this.statusorders = response.elementos;
          localStorage.setItem('statusorders', JSON.stringify(this.statusorders));
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



  

  






