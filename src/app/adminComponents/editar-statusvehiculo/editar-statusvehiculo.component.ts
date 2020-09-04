import { Component, OnInit } from '@angular/core';
import {statusVehiculoService} from "../../services/statusvehiculo.service";
import {variableService} from "../../services/variables.service"
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute, Params } from "@angular/router";
import {ToastrService} from "ngx-toastr";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-editar-statusvehiculo',
  templateUrl: './editar-statusvehiculo.component.html',
  styleUrls: ['./editar-statusvehiculo.component.scss'],
  providers: [statusVehiculoService, variableService]
  
})
export class EditarStatusvehiculoComponent implements OnInit {

  token: any;
  textoCrear: string;
  id: number;
  form: FormGroup;
  statusvehiculo: any;
  statusvehiculos: any;

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
    this.textoCrear = "Actualice el status seleccionado!";  
    this.statusvehiculos = JSON.parse(localStorage.getItem('statusvehiculos'));
  }

  ngOnInit(): void {
    window.scrollTo(0,0);
    this.getStatus();
  }

  private editarForm() {

		this.form = this._formBuilder.group({
      status: new FormControl(this.statusvehiculo.status, { validators: [Validators.required], updateOn: 'change' }),
		});

  } 

  getStatus(){

    this._route.params.subscribe(params => {

      this.id = +params['id'];

        this.statusvehiculo = this.statusvehiculos.find(element => element.id == this.id);

        if(this.statusvehiculo){
          this.editarForm();
        }
      });
  }

  onSubmit(form){
    this._spinner.show();
    this._statusvehiculoService.updateStatusvehiculo(this.token, form, this.id).subscribe(
      response => {
        if(response.status == 'success'){
          this._toastr.success('El status se ha creado con éxito', 'LISTO');
          this.form.reset();
          window.scrollTo(0,0);
          this._spinner.hide();

          //redireccion a inicio
          this._router.navigate(['status/vehiculo']);
    

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

















     









  
