import { Component, OnInit } from '@angular/core';
import {departamentoService} from "../../services/departamento.service"
import {subdireccionService} from "../../services/subdireccion.service"
import {variableService} from "../../services/variables.service"
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from "@angular/router";
import {ToastrService} from "ngx-toastr";
import { NgxSpinnerService } from "ngx-spinner";


@Component({
  selector: 'app-departamentos',
  templateUrl: './departamentos.component.html',
  styleUrls: ['./departamentos.component.scss'],
  providers: [departamentoService, variableService, subdireccionService]
})
export class DepartamentosComponent implements OnInit {

  textoCrear: String;
  token;
  departamentos;
  subdirecciones: any;

  constructor(
    private _departamentoService: departamentoService,
    private _variableService: variableService,
    private _subdireccionService: subdireccionService,
    private _formBuilder: FormBuilder,
    private _toastr: ToastrService,
    private _router: Router,
    private _route: ActivatedRoute,
    private _spinner: NgxSpinnerService,
    ) {
    this.textoCrear = "departamentos del ITM"
    this.token = this._variableService.getToken();
   }

  ngOnInit(): void {
    window.scrollTo(0,0);
    this.getDepartamentos();
  
  }
 

  getDepartamentos(){
    this._spinner.show();
    this._departamentoService.getDepartamentos(this.token).subscribe(
      response => {
        if(response.status == 'success'){
          this.departamentos = response.elementos;
          localStorage.setItem('departamentos', JSON.stringify(this.departamentos));
          this._spinner.hide();

        }else{
          this._spinner.hide();
          console.log('errores');

        }

      },
      error => {
        this._spinner.hide();
        console.log('error');

      }
    )
  }

}


