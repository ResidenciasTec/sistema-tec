import { Component, OnInit } from '@angular/core';
import {lugarService} from "../../services/lugar.service";
import {ubicacionService} from "../../services/ubicacion.service";
import {variableService} from "../../services/variables.service"
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute, Params } from "@angular/router";
import {ToastrService} from "ngx-toastr";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-crear-espacio',
  templateUrl: './crear-espacio.component.html',
  styleUrls: ['./crear-espacio.component.scss'],
  providers: [lugarService, variableService, ubicacionService]
})
export class CrearEspacioComponent implements OnInit {

  form: FormGroup;
  token: any;
  textoCrear: string;
  ubicaciones: any;

  constructor(
    private _lugarService: lugarService,
    private _ubicacionService: ubicacionService,
    private _variableService: variableService,
    private _formBuilder: FormBuilder,
    private _toastr: ToastrService,
    private _router: Router,
    private _route: ActivatedRoute,
    private _spinner: NgxSpinnerService
    ) {      
      this.token = this._variableService.getToken();
      this.textoCrear = "crea un espacio nuevo!"; 
    }

  ngOnInit(): void {
    window.scrollTo(0,0);
    this.getUbicaciones();
    this.crearForm();
  }

  private crearForm() {

		this.form = this._formBuilder.group({
      espacio: new FormControl('', { validators: [Validators.required], updateOn: 'change' }),
      ubicacion_id: new FormControl('', { validators: [Validators.required], updateOn: 'change' }),
		});

  } 

  onSubmit(form){
    this._spinner.show();
    this._lugarService.createLugar(this.token, form).subscribe(
      response => {
        if(response.status == 'success'){
          this._toastr.success('el espacio se ha creado con exito', 'LISTO');
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
  getUbicaciones(){
    this._ubicacionService.getUbicaciones(this.token).subscribe(
      response => {
        if(response.status == 'success'){
          this.ubicaciones = response.elementos;
          localStorage.setItem('ubicaciones', JSON.stringify(this.ubicaciones));

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







  


 
