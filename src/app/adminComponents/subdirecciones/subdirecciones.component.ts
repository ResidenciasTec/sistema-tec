import { Component, OnInit } from '@angular/core';
import {variableService} from "../../services/variables.service"
import {subdireccionService} from "../../services/subdireccion.service"
import { Router, ActivatedRoute, Params } from "@angular/router";
import {ToastrService} from "ngx-toastr";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-subdirecciones',
  templateUrl: './subdirecciones.component.html',
  styleUrls: ['./subdirecciones.component.scss'],
  providers: [subdireccionService, variableService]
})
export class SubdireccionesComponent implements OnInit {

  textoCrear: String;
  token;
  subdirecciones;

  constructor(    
    private _subdireccionService: subdireccionService,
    private _variableService: variableService,    
    private _toastr: ToastrService,
    private _router: Router,
    private _route: ActivatedRoute,
    private _spinner: NgxSpinnerService
    ) {       
    this.textoCrear = "departamentos del ITM"
    this.token = this._variableService.getToken();
  }

  ngOnInit(): void {
    window.scrollTo(0,0);
    this.getSubdirecciones();
  }

  getSubdirecciones(){
    this._spinner.show();
    this._subdireccionService.getSubdirecciones(this.token).subscribe(
      response => {
        if(response.status == 'success'){
           console.log('ha entrado al sucess');
          this.subdirecciones = response.elementos;
          localStorage.setItem('subdirecciones', JSON.stringify(this.subdirecciones));
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






