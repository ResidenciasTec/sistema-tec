import { Component, OnInit } from '@angular/core';
import {ubicacionService} from "../../services/ubicacion.service";
import {variableService} from "../../services/variables.service"
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute, Params } from "@angular/router";
import {ToastrService} from "ngx-toastr";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-crear-ubicacion',
  templateUrl: './crear-ubicacion.component.html',
  styleUrls: ['./crear-ubicacion.component.scss'],
  providers: [ubicacionService, variableService]
})
export class CrearUbicacionComponent implements OnInit {

  form: FormGroup;
  token: any;
  textoCrear: string;

  constructor(    
    private _ubicacionService: ubicacionService,
    private _variableService: variableService,
    private _formBuilder: FormBuilder,
    private _toastr: ToastrService,
    private _router: Router,
    private _route: ActivatedRoute,
    private _spinner: NgxSpinnerService
    ) {      
      this.token = this._variableService.getToken();
      this.textoCrear = "Crear una ubicación nueva!";  
    }

  ngOnInit(): void {
    window.scrollTo(0,0);
    this.crearForm();
  }

  
  private crearForm() {

		this.form = this._formBuilder.group({
      ubicacion: new FormControl('', { validators: [Validators.required], updateOn: 'change' }),
		});

  } 

  onSubmit(form){
    this._spinner.show();
    this._ubicacionService.createUbicacion(this.token, form).subscribe(
      response => {
        if(response.status == 'success'){
          this._toastr.success('La ubicación se ha creado con éxito', 'LISTO');
          this.form.reset();
          window.scrollTo(0,0);
          this._spinner.hide();
    

        }else{
          this._spinner.hide();
          this._toastr.error('Parece que ha habido algun error','OOPS');

        }
      },
      error => {
        this._spinner.hide();
        this._toastr.error('Parece que los datos han sido erróneos','OOPS');
        console.log(<any>error);

      }
    );

  }

}









