import { Component, OnInit } from '@angular/core';
import {lugarService} from "../../services/lugar.service";
import {ubicacionService} from "../../services/ubicacion.service";
import {variableService} from "../../services/variables.service"
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute, Params } from "@angular/router";
import {ToastrService} from "ngx-toastr";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-editar-espacio',
  templateUrl: './editar-espacio.component.html',
  styleUrls: ['./editar-espacio.component.scss'],
  providers: [lugarService, variableService, ubicacionService]
})
export class EditarEspacioComponent implements OnInit {

  token: any;
  textoCrear: string;
  espacios: any;
  id: number;
  espacio: any;
  form: FormGroup;
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
      this.textoCrear = "edita el espacio seleccionado!";  
      this.espacios = JSON.parse(localStorage.getItem('espacios'));
    }

  ngOnInit(): void {
    window.scrollTo(0,0);
    this.getUbicaciones();
    this.getEspacio();
  }

  private editarForm() {

		this.form = this._formBuilder.group({
      espacio: new FormControl(this.espacio.espacio, { validators: [Validators.required], updateOn: 'change' }),
      ubicacion_id: new FormControl(this.espacio.ubicacion_id, { validators: [Validators.required], updateOn: 'change' }),
		});

  } 

  getEspacio(){

    this._route.params.subscribe(params => {

      this.id = +params['id'];

        this.espacio = this.espacios.find(element => element.id == this.id);

        if(this.espacio){
          this.editarForm();
        }
      });
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

  onSubmit(form){
    this._spinner.show();
    this._lugarService.updateLugar(this.token, form, this.id).subscribe(
      response => {
        if(response.status == 'success'){
          this._toastr.success('el espacio se ha creado con exito', 'LISTO');
          this.form.reset();
          window.scrollTo(0,0);
          this._spinner.hide();

          //redireccion a inicio
          this._router.navigate(['espacios']);

    

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





























