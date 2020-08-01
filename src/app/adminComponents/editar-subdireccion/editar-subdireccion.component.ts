import { Component, OnInit } from '@angular/core';
import {subdireccionService} from "../../services/subdireccion.service";
import {variableService} from "../../services/variables.service"
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute, Params } from "@angular/router";
import {ToastrService} from "ngx-toastr";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-editar-subdireccion',
  templateUrl: './editar-subdireccion.component.html',
  styleUrls: ['./editar-subdireccion.component.scss'],
  providers: [subdireccionService, variableService]
})
export class EditarSubdireccionComponent implements OnInit {

  token: any;
  textoCrear: string;
  id: number;
  form: FormGroup;
  subdireccion: any;
  subdirecciones: any;

  constructor(    
    private _subdireccionService: subdireccionService,
    private _variableService: variableService,
    private _formBuilder: FormBuilder,
    private _toastr: ToastrService,
    private _router: Router,
    private _route: ActivatedRoute,
    private _spinner: NgxSpinnerService
    ) {    
      this.token = this._variableService.getToken();
      this.textoCrear = "actualiza la subdireccion seleccionada!";  
      this.subdirecciones = JSON.parse(localStorage.getItem('subdirecciones')); 
  }

  ngOnInit(): void {    
    window.scrollTo(0,0);
    this.getStatus();
  }

    
  private editarForm() {

		this.form = this._formBuilder.group({
      subdireccion: new FormControl(this.subdireccion.subdireccion, { validators: [Validators.required], updateOn: 'change' }),
		});

  }

  getStatus(){

    this._route.params.subscribe(params => {

      this.id = +params['id'];

        this.subdireccion = this.subdirecciones.find(element => element.id == this.id);

        if(this.subdireccion){
          this.editarForm();
        }
      });
  }

  
  onSubmit(form){
    this._spinner.show();
    this._subdireccionService.updateSubdireccion(this.token, form, this.id).subscribe(
      response => {
        if(response.status == 'success'){
          this._toastr.success('la subdireccion se ha creado con exito', 'LISTO');
          this.form.reset();
          window.scrollTo(0,0);
          this._spinner.hide();

          //redireccion a inicio
          this._router.navigate(['subdirecciones']);
    

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



}







      



 




