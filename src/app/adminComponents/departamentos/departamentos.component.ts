import { Component, OnInit } from '@angular/core';
import {departamentoService} from "../../services/departamento.service"
import {subdireccionService} from "../../services/subdireccion.service"
import {variableService} from "../../services/variables.service"
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from "@angular/router";
import {ToastrService} from "ngx-toastr";
import { NgxSpinnerService } from "ngx-spinner";
import { global } from "../../services/global";


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
  types: string[];
  order: { type: string; };
  total: any;
  last_page: any;
  current_page: any;
  next_page_url: any;
  prev_page_url: any;
  global: string;

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
      this.global = global.url;
      this.textoCrear = "departamentos del ITM"
      this.token = this._variableService.getToken();
      this.types = [ 'academica', 'administrativa', 'planeacion', 'mostrar todas'];
        
      this.order = {
        type: 'type1'          
    }; 
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
          this.departamentos = response.elementos.data;
          this.total = response.elementos.total;
          this.last_page = response.elementos.last_page;
          this.current_page = response.elementos.current_page;
          this.next_page_url = this.changeUrlApi(response.elementos.next_page_url);
          this.prev_page_url = this.changeUrlApi(response.elementos.prev_page_url);
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

  previousPage(){
    this._spinner.show();
    this._variableService.getNextPage(this.token, this.prev_page_url ).subscribe(
      response => {
        console.log('si entra')
        if(response.status == 'success'){
          this.departamentos = response.elementos.data;
          this.total = response.elementos.total;
          this.last_page = response.elementos.last_page;
          this.current_page = response.elementos.current_page;
          this.next_page_url = this.changeUrlApi(response.elementos.next_page_url);
          this.prev_page_url = this.changeUrlApi(response.elementos.prev_page_url);
          window.scrollTo(0,0);
          this._spinner.hide();

        }else{
          console.log('entra y se regresa')
          this._spinner.hide();

        }

      },
      error => {
        console.log('no entra')
        console.log(<any>error)
        this._spinner.hide();

      }

    );
  }

  nextPage(){
    this._spinner.show();
    this._variableService.getNextPage(this.token, this.next_page_url ).subscribe(
      response => {
        console.log('si entra')
        if(response.status == 'success'){
          this.departamentos = response.elementos.data;
          this.total = response.elementos.total;
          this.last_page = response.elementos.last_page;
          this.current_page = response.elementos.current_page;
          this.next_page_url = this.changeUrlApi(response.elementos.next_page_url);
          this.prev_page_url = this.changeUrlApi(response.elementos.prev_page_url);
          window.scrollTo(0,0);
          this._spinner.hide();

        }else{
          console.log('entra y se regresa')
          this._spinner.hide();

        }

      },
      error => {
        console.log('no entra')
        console.log(<any>error)
        this._spinner.hide();

      }

    );
  }

  getFiltrado(data){
    this._spinner.show();
    this._departamentoService.getFiltrado(this.token, data).subscribe(
      response =>{
        if(response.status == 'success'){
          this.departamentos = response.elementos.data;
          this.total = response.elementos.total;
          this.last_page = response.elementos.last_page;
          this.current_page = response.elementos.current_page;
          this.next_page_url = this.changeUrlApi(response.elementos.next_page_url);
          this.prev_page_url = this.changeUrlApi(response.elementos.prev_page_url);
          window.scrollTo(0,0);
          this._spinner.hide();

        }else{
          console.log('entra y se regresa')
          this._spinner.hide();

        }
        

      },
      error =>{
        this._spinner.hide();
        console.log(<any>error);

      }
    )

  }

  getOptions(value){
    let data = this.order.type=value;

    switch(data){
      case 'academica':
        this.getFiltrado('academica');
      break;

      case 'administrativa':
        this.getFiltrado('administrativa');
      break;

      case 'planeacion':
        this.getFiltrado('planeacion');
      break;

      case 'mostrar todas':
        this.getDepartamentos();
      break;

    }

  }

  changeUrlApi(url){

    if(url === null){
      return "";
    }
    const restOfUrl = url.substring(47);

    return `${this.global}${restOfUrl}`
  }

}


