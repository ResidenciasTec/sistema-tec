import { Component, OnInit } from '@angular/core';
import {ubicacionService} from "../../services/ubicacion.service";
import {variableService} from "../../services/variables.service"
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute, Params } from "@angular/router";
import {ToastrService} from "ngx-toastr";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-editar-ubicacion',
  templateUrl: './editar-ubicacion.component.html',
  styleUrls: ['./editar-ubicacion.component.scss'],
  providers: [ubicacionService, variableService]

})
export class EditarUbicacionComponent implements OnInit {

  token: any;
  textoCrear: string;
  id: number;
  form: FormGroup;
  ubicacion: any;
  ubicaciones: any;

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
    this.textoCrear = "Actualice la ubicación seleccionada!";  
    this.ubicaciones = JSON.parse(localStorage.getItem('ubicaciones'));  
  }

  ngOnInit(): void {
    window.scrollTo(0,0);
    this.getUbicacion();
  }

  private editarForm() {

		this.form = this._formBuilder.group({
      ubicacion: new FormControl(this.ubicacion.ubicacion, { validators: [Validators.required], updateOn: 'change' }),
		});

  } 

  getUbicacion(){

    this._route.params.subscribe(params => {

      this.id = +params['id'];

        this.ubicacion = this.ubicaciones.find(element => element.id == this.id);

        if(this.ubicacion){
          this.editarForm();
        }
      });
  }

  onSubmit(form){
    this._spinner.show();
    this._ubicacionService.updateUbicacion(this.token, form, this.id).subscribe(
      response => {
        if(response.status == 'success'){
          this._toastr.success('La ubicación se ha creado con éxito', 'LISTO');
          this.form.reset();
          window.scrollTo(0,0);
          this._spinner.hide();

          //redireccion a inicio
          this._router.navigate(['ubicaciones']);
    

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













   





 





  








      
