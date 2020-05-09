import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router";
import {departamentoService} from "../../services/departamento.service"
import {variableService} from "../../services/variables.service"
import {subdireccionService} from "../../services/subdireccion.service"
import {ToastrService} from "ngx-toastr";
import { NgxSpinnerService } from "ngx-spinner";
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-ver-departamento',
  templateUrl: './ver-departamento.component.html',
  styleUrls: ['./ver-departamento.component.scss'],
  providers: [departamentoService, variableService, subdireccionService]
})
export class VerDepartamentoComponent implements OnInit {
  textoCrear: string;
  token: any;
  departamento: any;
  departamentos: any;
  id: any;

  constructor(
    private _departamentoService: departamentoService,
    private _variableService: variableService,
    private _toastr: ToastrService,
    private _subdireccionService: subdireccionService,
    private _spinner: NgxSpinnerService,
    private _router: Router,
    private _route: ActivatedRoute,
  ) {
    this.textoCrear = "departamento"
    this.token = this._variableService.getToken();
   }

  ngOnInit(): void {
    window.scrollTo(0,0);
    this.getDepartamentos();
    this.getDepartamento();
  }

  getDepartamento(){
    this._spinner.show();

    this._route.params.subscribe(params => {

      this.id = +params['id'];
      this._spinner.show();
      window.scrollTo(0,0);

      this._departamentoService.getDepartamento(this.token, this.id).subscribe(
        response =>{
          if(response.status == 'success'){
            this.departamento = response.elementos;
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
    });
  }

  getDepartamentos(){

    this._spinner.show();

    this._departamentoService.getDepartamentos(this.token).subscribe(
      response =>{
        if(response.status == 'success'){
          this.departamentos = response.elementos;
          localStorage.setItem('departamentos', JSON.stringify(this.departamentos));
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




