import { Component, OnInit } from '@angular/core';
import {departamentoService} from "../../services/departamento.service"
import {variableService} from "../../services/variables.service"
import {subdireccionService} from "../../services/subdireccion.service"
import { Router, ActivatedRoute, Params } from "@angular/router";
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import {ToastrService} from "ngx-toastr";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-actualizar-departamento',
  templateUrl: './actualizar-departamento.component.html',
  styleUrls: ['./actualizar-departamento.component.scss'],
  providers: [departamentoService, variableService, subdireccionService]
})
export class ActualizarDepartamentoComponent implements OnInit {
  token: any;
  textoCrear: string;
  departamentos: any;
  id: number;
  departamento: any;
  subdirecciones: any;
  form: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _spinner: NgxSpinnerService,
    private _toastr: ToastrService,
    private _variableService: variableService,
    private _departamentoService: departamentoService,
    private _subdireccionService: subdireccionService,
    private _router: Router,
    private _route: ActivatedRoute,
  ) {
    this.token = this._variableService.getToken();
    this.textoCrear = "actualizar el departamento";
    this.departamentos = JSON.parse(localStorage.getItem('departamentos'));
   }

  ngOnInit(): void {
    window.scrollTo(0,0);
    this.getSubdirecciones();
    this.getDepartamento();
  }

  private editarForm() {

		this.form = this._formBuilder.group({
      departamento: new FormControl(this.departamento.departamento, { validators: [Validators.required], updateOn: 'change' }),
      telefono: new FormControl(this.departamento.telefono, { validators: [Validators.required], updateOn: 'change' }),
      correo: new FormControl(this.departamento.correo, { validators: [Validators.required, Validators.email], updateOn: 'change' }),
      subdireccion_id: new FormControl(this.departamento.subdireccion_id, { validators: [Validators.required], updateOn: 'change' }),
		});

  }  

  getDepartamento(){

    this._route.params.subscribe(params => {

      this.id = +params['id'];

        this.departamento = this.departamentos.find(element => element.id == this.id);

        if(this.departamento){
          this.editarForm();
        }
      });
  }


  onSubmit(form){
    this._spinner.show();
    this._departamentoService.updateDepartamento(this.token, form, this.departamento.id).subscribe(
      response => {
        if(response.status == 'success'){
          this._toastr.success('el vehiculo se ha actualizado correctamente', 'LISTO');
          window.scrollTo(0,0);
          this._spinner.hide();

          //redireccion a inicio
          this._router.navigate(['departamentos/'+this.id]);


        }else{
          this._spinner.hide();
          this._toastr.error('parece que algo anda mal, intentalo nuevamente', 'UPS');

        }
      },
      error =>{
        this._spinner.hide();
        console.log(<any>error);
        this._toastr.error('parece que los datos ingresados no son correctos', 'UPS');

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


}














