import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import {departamentoService} from "../../services/departamento.service"
import {subdireccionService} from "../../services/subdireccion.service"
import {variableService} from "../../services/variables.service"
import { Router, ActivatedRoute, Params } from "@angular/router";
import {ToastrService} from "ngx-toastr";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-crear-departamento',
  templateUrl: './crear-departamento.component.html',
  styleUrls: ['./crear-departamento.component.scss'],
  providers: [departamentoService, variableService, subdireccionService]
})
export class CrearDepartamentoComponent implements OnInit {
  form: FormGroup;
  token: any;
  subdirecciones: any;
  textoCrear: string;

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
    this.token = this._variableService.getToken();
    this.textoCrear = "crea un nuevo departamento!";
  }

  ngOnInit(): void {
    window.scrollTo(0,0);
    this.getSubdirecciones();
    this.crearForm();
  }

  private crearForm() {

		this.form = this._formBuilder.group({
      departamento: new FormControl('', { validators: [Validators.required], updateOn: 'change' }),
      telefono: new FormControl(null, { validators: [Validators.required], updateOn: 'change' }),
      correo: new FormControl('', { validators: [Validators.required, Validators.email], updateOn: 'change' }),
      subdireccion_id: new FormControl('', { validators: [Validators.required], updateOn: 'change' }),
		});

  } 
  
  onSubmit(form){
    this._spinner.show();
    this._departamentoService.createDepartamento(this.token, form).subscribe(
      response => {
        if(response.status == 'success'){
          this._toastr.success('el departamento se ha creado con exito', 'LISTO');
          this.form.reset();
          window.scrollTo(0,0);
          this._spinner.hide();
    

        }else{
          this._spinner.hide();
          this._toastr.error('parece que ha habido algun error','OOPS');

        }
      },
      error => {
        this._spinner.hide();
        this._toastr.error('parece que los datos han sido erroneos','OOPS');
        console.log(<any>error);

      }
    );

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

}
