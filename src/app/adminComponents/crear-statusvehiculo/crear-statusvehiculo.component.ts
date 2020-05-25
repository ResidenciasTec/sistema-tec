import { Component, OnInit } from '@angular/core';
import {statusVehiculoService} from "../../services/statusvehiculo.service";
import {variableService} from "../../services/variables.service"
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute, Params } from "@angular/router";
import {ToastrService} from "ngx-toastr";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-crear-statusvehiculo',
  templateUrl: './crear-statusvehiculo.component.html',
  styleUrls: ['./crear-statusvehiculo.component.scss'],
  providers: [statusVehiculoService, variableService]
})
export class CrearStatusvehiculoComponent implements OnInit {

  form: FormGroup;
  token: any;
  textoCrear: string;

  constructor(    
    private _statusvehiculoService: statusVehiculoService,
    private _variableService: variableService,
    private _formBuilder: FormBuilder,
    private _toastr: ToastrService,
    private _router: Router,
    private _route: ActivatedRoute,
    private _spinner: NgxSpinnerService
    ) {      
      this.token = this._variableService.getToken();
      this.textoCrear = "crea un status de vehiculos nuevo!";   
    }

  ngOnInit(): void {
    window.scrollTo(0,0);
    this.crearForm();
  }

  private crearForm() {

		this.form = this._formBuilder.group({
      status: new FormControl('', { validators: [Validators.required], updateOn: 'change' }),
		});

  } 

  onSubmit(form){
    this._spinner.show();
    this._statusvehiculoService.createStatusvehiculo(this.token, form).subscribe(
      response => {
        if(response.status == 'success'){
          this._toastr.success('el status se ha creado con exito', 'LISTO');
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

}






