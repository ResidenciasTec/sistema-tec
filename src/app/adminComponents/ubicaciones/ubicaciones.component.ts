import { Component, OnInit } from '@angular/core';
import {variableService} from "../../services/variables.service"
import {ubicacionService} from "../../services/ubicacion.service"
import { Router, ActivatedRoute, Params } from "@angular/router";
import {ToastrService} from "ngx-toastr";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-ubicaciones',
  templateUrl: './ubicaciones.component.html',
  styleUrls: ['./ubicaciones.component.scss'],
  providers: [ubicacionService, variableService]
})
export class UbicacionesComponent implements OnInit {

  textoCrear: String;
  token;
  ubicaciones;

  constructor(    
    private _ubicacionService: ubicacionService,
    private _variableService: variableService,    
    private _toastr: ToastrService,
    private _router: Router,
    private _route: ActivatedRoute,
    private _spinner: NgxSpinnerService
    ) 
    {    
    this.textoCrear = "lugares de eventos del ITM"
    this.token = this._variableService.getToken();  
  }

  ngOnInit(): void {
    window.scrollTo(0,0);
    this.getSubdirecciones();
  }

  getSubdirecciones(){
    this._spinner.show();
    this._ubicacionService.getUbicaciones(this.token).subscribe(
      response => {
        if(response.status == 'success'){
           console.log('ha entrado al sucess');
          this.ubicaciones = response.elementos;
          localStorage.setItem('espacios', JSON.stringify(this.ubicaciones));
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












