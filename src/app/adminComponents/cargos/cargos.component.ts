import { Component, OnInit } from '@angular/core';
import {variableService} from "../../services/variables.service"
import {CargoService} from "../../services/cargo.service"
import { Router, ActivatedRoute, Params } from "@angular/router";
import {ToastrService} from "ngx-toastr";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-cargos',
  templateUrl: './cargos.component.html',
  styleUrls: ['./cargos.component.scss'],
  providers: [CargoService, variableService]
})
export class CargosComponent implements OnInit {

  textoCrear: String;
  token;
  cargos;
  constructor(
    private _cargoService: CargoService,
    private _variableService: variableService,    
    private _toastr: ToastrService,
    private _router: Router,
    private _route: ActivatedRoute,
    private _spinner: NgxSpinnerService,
    ) 
    {    
      this.textoCrear = "Cargos de Docentes"
      this.token = this._variableService.getToken();
    }

  ngOnInit(): void {    
    window.scrollTo(0,0);
    this.getCargos();
  }

  getCargos(){
    this._spinner.show();
    this._cargoService.getCargos(this.token).subscribe(
      response => {
        if(response.status == 'success'){
           console.log('ha entrado al sucess');
          this.cargos = response.cargos;
          localStorage.setItem('cargos', JSON.stringify(this.cargos));
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




