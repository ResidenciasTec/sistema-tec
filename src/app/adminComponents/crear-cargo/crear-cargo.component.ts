import { Component, OnInit } from '@angular/core';
import {CargoService} from "../../services/cargo.service";
import {variableService} from "../../services/variables.service"
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute, Params } from "@angular/router";
import {ToastrService} from "ngx-toastr";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-crear-cargo',
  templateUrl: './crear-cargo.component.html',
  styleUrls: ['./crear-cargo.component.scss'],
  providers: [CargoService, variableService]
  
})
export class CrearCargoComponent implements OnInit {

  form: FormGroup;
  token: any;
  textoCrear: string;

  constructor(    private _cargoService: CargoService,
    private _variableService: variableService,
    private _formBuilder: FormBuilder,
    private _toastr: ToastrService,
    private _router: Router,
    private _route: ActivatedRoute,
    private _spinner: NgxSpinnerService,) 
    {
      this.token = this._variableService.getToken();
      this.textoCrear = "Crear un cargo nuevo!";
    }

  ngOnInit(): void {
    window.scrollTo(0,0);
    this.crearForm();

  }

  private crearForm() {

		this.form = this._formBuilder.group({
      cargo: new FormControl('', { validators: [Validators.required], updateOn: 'change' }),
		});

  } 

  onSubmit(form){
    this._spinner.show();
    this._cargoService.createCargo(this.token, form).subscribe(
      response => {
        if(response.status == 'success'){
          this._toastr.success('El cargo se ha creado con éxito', 'LISTO');
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


  


 


