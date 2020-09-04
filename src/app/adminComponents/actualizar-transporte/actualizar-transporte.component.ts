import { Component, OnInit } from '@angular/core';
import {TransporteService} from "../../services/transporte.service"
import {variableService} from "../../services/variables.service"
import {statusVehiculoService} from "../../services/statusvehiculo.service"
import { Router, ActivatedRoute, Params } from "@angular/router";
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import {ToastrService} from "ngx-toastr";
import { NgxSpinnerService } from "ngx-spinner";



@Component({
  selector: 'app-actualizar-transporte',
  templateUrl: './actualizar-transporte.component.html',
  styleUrls: ['./actualizar-transporte.component.scss'],
  providers: [TransporteService, variableService, statusVehiculoService]
})
export class ActualizarTransporteComponent implements OnInit {


  vehiculo: any;
  vehiculos: any;
  token: any;
  form: FormGroup;
  statusvehiculos: any;
  textoCrear: any;
  id: number;
  
  constructor(
      private _formBuilder: FormBuilder,
      private _spinner: NgxSpinnerService,
      private _toastr: ToastrService,
      private _variableService: variableService,
      private _transporteService: TransporteService,
      private _statusvehiculoService: statusVehiculoService,
      private _router: Router,
      private _route: ActivatedRoute,
  ) 
  { 
    this.token = this._variableService.getToken();
    this.textoCrear = "Actualizar el Vehículo";
    this.vehiculos = JSON.parse(localStorage.getItem('vehiculos'));
  }

  ngOnInit(): void {
    window.scrollTo(0,0);
    this.getStatusvehiculos();
    this.getTransporte();
    this.editarForm();
  }

  private editarForm() {

		this.form = this._formBuilder.group({
      vehiculo: new FormControl(this.vehiculo.vehiculo, { validators: [Validators.required], updateOn: 'change' }),
      marca: new FormControl(this.vehiculo.marca, { validators: [Validators.required], updateOn: 'change' }),
      placas: new FormControl(this.vehiculo.placas, { validators: [Validators.required], updateOn: 'change' }),
      kilometraje: new FormControl(this.vehiculo.kilometraje, { validators: [Validators.required], updateOn: 'change' }),
      status_id: new FormControl(this.vehiculo.status_id, { validators: [Validators.required], updateOn: 'change'})
		});

  } 

  getTransporte(){

    this._route.params.subscribe(params => {

      this.id = +params['id'];

        this.vehiculo = this.vehiculos.find(element => element.id == this.id);
      });
  }


  onSubmit(form){
    this._spinner.show();
    this._transporteService.updateTransporte(this.token, form, this.vehiculo.id).subscribe(
      response => {
        if(response.status == 'success'){
          this._toastr.success('El Vehículo se ha actualizado correctamente', 'LISTO');
          window.scrollTo(0,0);
          this._spinner.hide();

          //redireccion a inicio
          this._router.navigate(['vehiculo/'+this.id]);


        }else{
          this._spinner.hide();
          this._toastr.error('Parece que ango anda mal, intentelo nuevamente', 'UPS');

        }
      },
      error =>{
        this._spinner.hide();
        console.log(<any>error);
        this._toastr.error('Parece que los datos ingresados no son correctos', 'UPS');

      }
    )

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









