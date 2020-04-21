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
  formCrear: FormGroup;
  formEditar: FormGroup;
  crear: Boolean;
  actualizar: Boolean;
  detalle: Boolean;
  subdirecciones: any;
  dataDepartamento: any
  name: String;
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
    this.crear = false;
    this.actualizar = false;
    this.detalle = false;
    this.name = "departamento";
   }

  ngOnInit(): void {
    window.scrollTo(0,0);
    this.getDepartamentos();
    this.getSubdirecciones();


  }

  private crearForm() {

		this.formCrear = this._formBuilder.group({
      departamento: new FormControl('', { validators: [Validators.required], updateOn: 'change' }),
      telefono: new FormControl(null, { validators: [Validators.required], updateOn: 'change' }),
      correo: new FormControl('', { validators: [Validators.required, Validators.email], updateOn: 'change' }),
      subdireccion_id: new FormControl('', { validators: [Validators.required], updateOn: 'change' }),
		});

  }  

  private editarForm(data) {
    this.dataDepartamento = data;

		this.formEditar = this._formBuilder.group({
      departamento: new FormControl(data.departamento, { validators: [Validators.required], updateOn: 'change' }),
      telefono: new FormControl(data.telefono, { validators: [Validators.required], updateOn: 'change' }),
      correo: new FormControl(data.correo, { validators: [Validators.required, Validators.email], updateOn: 'change' }),
      subdireccion_id: new FormControl(data.subdireccion_id, { validators: [Validators.required], updateOn: 'change' }),
		});

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

  
  getSubdirecciones(){
    this._subdireccionService.getSubdirecciones(this.token).subscribe(
      response => {
        if(response.status == 'success'){
          this.subdirecciones = response.elementos;
          localStorage.setItem('subdirecciones', JSON.stringify(this.subdirecciones));

        }else{
          console.log('errores');

        }

      },
      error => {
        console.log('error');

      }
    )

  }

  changeCrear(){
    this.crear = true;
    this.actualizar = false;
    this.detalle = false;
    this.crearForm();
    this.textoCrear = `agrega un ${this.name} nuevo`

  }

  changeEditar(data){
      this.actualizar = true;
      this.crear = false;
      this.detalle = false;
      this.editarForm(data);
      this.textoCrear = `edita el ${this.name} seleccionado`;
  }

  verDetalle(data){
    this.dataDepartamento = data;
    this.actualizar = false;
    this.crear = false;
    this.detalle = true;
    this.textoCrear = `datos del ${this.name}`;

  }

  submitCrear(form){
    this._spinner.show();
    this._departamentoService.createDepartamento(this.token, form).subscribe(
      response => {
        if(response.status == 'success'){
          this._toastr.success(`el ${name} se ha creado con exito`, 'LISTO');
          this.getDepartamentos();

        }else{
          this._toastr.error('parece que ha habido algun error','OOPS');

        }
      },
      error => {
        this._toastr.error('parece que los datos han sido erroneos','OOPS');
        console.log(<any>error);

      }
    );

  }

  submitActualizar(form){
    this._departamentoService.updateDepartamento(this.token, form, this.dataDepartamento.id).subscribe(
      response => {
        if(response.status == 'success'){
          this._toastr.success(`el ${name} se ha actualizado correctamente`, 'LISTO');
          this.getDepartamentos();

        }else{
          this._toastr.error('parece que ango anda mal, intentalo nuevamente', 'UPS');

        }
      },
      error =>{
        console.log(<any>error);
        this._toastr.error('parece que los datos ingresados no son correctos', 'UPS');

      }
    )

  }

  cerrar(){

    this.crear = false;
    this.actualizar = false;
    this.detalle = false;
    this.textoCrear = "todos los vehiculos"
    
  }

}
