import { Component, OnInit } from '@angular/core';
import {StatusorderService} from "../../services/statusorder.service";
import {variableService} from "../../services/variables.service"
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute, Params } from "@angular/router";
import {ToastrService} from "ngx-toastr";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-crear-statusorder',
  templateUrl: './crear-statusorder.component.html',
  styleUrls: ['./crear-statusorder.component.scss'],
  providers: [StatusorderService, variableService]
})
export class CrearStatusorderComponent implements OnInit {

  form: FormGroup;
  token: any;
  textoCrear: string;

  constructor(    
    private _statusorderService: StatusorderService,
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
    this.crearForm();
  }

  private crearForm() {

		this.form = this._formBuilder.group({
      status: new FormControl('', { validators: [Validators.required], updateOn: 'change' }),
		});

  } 

  onSubmit(form){
    this._spinner.show();
    this._statusorderService.createServicio(this.token, form).subscribe(
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







