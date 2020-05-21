import { Component, OnInit } from '@angular/core';
import {PermisoService} from "../../services/permiso.service";
import {variableService} from "../../services/variables.service"
import { Router, ActivatedRoute, Params } from "@angular/router";
import {ToastrService} from "ngx-toastr";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-permisos',
  templateUrl: './permisos.component.html',
  styleUrls: ['./permisos.component.scss'],
  providers: [PermisoService, variableService]
})
export class PermisosComponent implements OnInit {

  textoCrear: String;
  token;
  permisos;

  constructor(    
    private _permisoService: PermisoService,
    private _variableService: variableService,    
    private _toastr: ToastrService,
    private _router: Router,
    private _route: ActivatedRoute,
    private _spinner: NgxSpinnerService,
    )
    {
      this.textoCrear = "permisos de usuarios"
      this.token = this._variableService.getToken();
     }

  ngOnInit(): void {
    window.scrollTo(0,0);
    this.getPermisos();
  }

  
  getPermisos(){
    this._spinner.show();
    this._permisoService.getPermisos(this.token).subscribe(
      response => {
        if(response.status == 'success'){
           console.log('ha entrado al sucess');
          this.permisos = response.cargos;
          localStorage.setItem('permisos', JSON.stringify(this.permisos));
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










