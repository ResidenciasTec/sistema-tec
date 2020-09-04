import { Component, OnInit } from '@angular/core';
import {variableService} from "../../services/variables.service"
import {lugarService} from "../../services/lugar.service"
import { Router, ActivatedRoute, Params } from "@angular/router";
import {ToastrService} from "ngx-toastr";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-espacios',
  templateUrl: './espacios.component.html',
  styleUrls: ['./espacios.component.scss'],
  providers: [lugarService, variableService]
})
export class EspaciosComponent implements OnInit {

  textoCrear: String;
  token;
  espacios;

  constructor(    
    private _lugarService: lugarService,
    private _variableService: variableService,    
    private _toastr: ToastrService,
    private _router: Router,
    private _route: ActivatedRoute,
    private _spinner: NgxSpinnerService
    ) 
    {    
    this.textoCrear = "Lugares de Eventos del ITM"
    this.token = this._variableService.getToken(); 
  }

  ngOnInit(): void {
    window.scrollTo(0,0);
    this.getSubdirecciones();
  }
  getSubdirecciones(){
    this._spinner.show();
    this._lugarService.getLugares(this.token).subscribe(
      response => {
        if(response.status == 'success'){
           console.log('ha entrado al sucess');
          this.espacios = response.elementos;
          localStorage.setItem('espacios', JSON.stringify(this.espacios));
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














