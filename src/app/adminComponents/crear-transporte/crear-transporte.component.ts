import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import {TransporteService} from "../../services/transporte.service"
import {variableService} from "../../services/variables.service"
import {statusVehiculoService} from "../../services/statusvehiculo.service"
import {ToastrService} from "ngx-toastr";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-crear-transporte',
  templateUrl: './crear-transporte.component.html',
  styleUrls: ['./crear-transporte.component.scss'],
  providers: [TransporteService, variableService, statusVehiculoService]
})
export class CrearTransporteComponent implements OnInit {

  token: any;
  vehiculo: any;
  form: any;
  statusvehiculos: any;
  textoCrear: any;
  

  constructor(
    private _formBuilder: FormBuilder,
    private _spinner: NgxSpinnerService,
    private _toastr: ToastrService,
    private _variableService: variableService,
    private _transporteService: TransporteService,
    private _statusvehiculoService: statusVehiculoService,
  ) {
    this.token = this._variableService.getToken();
    this.textoCrear = "crea un nuevo vehiculo!";
   }

  ngOnInit(): void {
    window.scrollTo(0,0);
    this.getStatusvehiculos();
    this.crearForm();

  }

  
  private crearForm() {

		this.form = this._formBuilder.group({
      vehiculo: new FormControl('', { validators: [Validators.required], updateOn: 'change' }),
      marca: new FormControl('', { validators: [Validators.required], updateOn: 'change' }),
      placas: new FormControl('', { validators: [Validators.required], updateOn: 'change' }),
      kilometraje: new FormControl('', { validators: [Validators.required], updateOn: 'change' }),
      status_id: new FormControl('', { validators: [Validators.required], updateOn: 'change'})
		});

  } 
  
  onSubmit(form){
    this._transporteService.createTransporte(this.token, form).subscribe(
      response => {
        if(response.status == 'success'){
          this._toastr.success('el vehiculo se ha creado con exito', 'LISTO');
          this.form.reset();
          window.scrollTo(0,0);
    

        }else{
          this._toastr.error('parece que ha habido algun error','OOPS');

        }
      },
      error => {
        this._toastr.error('parece que los datos han sido erroneos','OOPS');
        console.log(<any>error);

      }
    );

  }

  getStatusvehiculos(){
    this._statusvehiculoService.getStatusvehiculos(this.token).subscribe(
      response => {
        if(response.status == 'success'){
          this.statusvehiculos = response.elementos;
          localStorage.setItem('statusvehiculos', JSON.stringify(this.statusvehiculos));

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
