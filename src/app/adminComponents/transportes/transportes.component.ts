import { Component, OnInit } from '@angular/core';
import {TransporteService} from "../../services/transporte.service"
import {variableService} from "../../services/variables.service"
import {statusVehiculoService} from "../../services/statusvehiculo.service"
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from "@angular/router";
import {ToastrService} from "ngx-toastr";
import { NgxSpinnerService } from "ngx-spinner";
 
@Component({
  selector: 'app-transportes',
  templateUrl: './transportes.component.html',
  styleUrls: ['./transportes.component.scss'],
  providers: [TransporteService, variableService, statusVehiculoService]
})
export class TransportesComponent implements OnInit {
  textoCrear: String;
  token;
  transportes;
  formCrear: FormGroup;
  formEditar: FormGroup;
  crear: Boolean;
  actualizar: Boolean;
  detalle: Boolean;
  statusvehiculos: any;
  dataVehiculo: any


  constructor(
    private _transporteService: TransporteService,
    private _variableService: variableService,
    private _formBuilder: FormBuilder,
    private _toastr: ToastrService,
    private _statusvehiucloService: statusVehiculoService,
    private _router: Router,
    private _route: ActivatedRoute,
    private _spinner: NgxSpinnerService,
    

  ) {
    this.textoCrear = "todos los vehiculos"
    this.token = this._variableService.getToken();
    this.crear = false;
    this.actualizar = false;
    this.detalle = false;
   }

  ngOnInit(): void {
    window.scrollTo(0,0);
    this.getTransportes();
    this.getStatusvehiculos();

  }

  private crearForm() {

		this.formCrear = this._formBuilder.group({
      vehiculo: new FormControl('', { validators: [Validators.required], updateOn: 'change' }),
      marca: new FormControl('', { validators: [Validators.required], updateOn: 'change' }),
      placas: new FormControl('', { validators: [Validators.required], updateOn: 'change' }),
      kilometraje: new FormControl('', { validators: [Validators.required], updateOn: 'change' }),
      status_id: new FormControl('', { validators: [Validators.required], updateOn: 'change'})
		});

  }  

  private editarForm(data) {
    this.dataVehiculo = data;

		this.formEditar = this._formBuilder.group({
      vehiculo: new FormControl(data.vehiculo, { validators: [Validators.required], updateOn: 'change' }),
      marca: new FormControl(data.marca, { validators: [Validators.required], updateOn: 'change' }),
      placas: new FormControl(data.placas, { validators: [Validators.required], updateOn: 'change' }),
      kilometraje: new FormControl(data.kilometraje, { validators: [Validators.required], updateOn: 'change' }),
      status_id: new FormControl(data.status_id, { validators: [Validators.required], updateOn: 'change'})
		});

  }  

  getTransportes(){
    this._spinner.show();
    this._transporteService.getTransportes(this.token).subscribe(
      response =>{
        if(response.status == 'success'){
          this.transportes = response.elementos;
          localStorage.setItem('transportes', JSON.stringify(this.transportes));
          this._spinner.hide();
        }else{
          this._spinner.hide();
          console.log('errores');
        }

      },
      error =>{
        this._spinner.hide();
        console.log('error');
      }
    )
  }

  getStatusvehiculos(){
    this._statusvehiucloService.getStatusvehiculos(this.token).subscribe(
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

  changeCrear(){
    this.crear = true;
    this.actualizar = false;
    this.detalle = false;
    this.crearForm();
    this.textoCrear = "agrega un vehiculo nuevo"

  }

  changeEditar(data){
      this.actualizar = true;
      this.crear = false;
      this.detalle = false;
      this.editarForm(data);
      this.textoCrear = "edita el vehiculo seleccionado";
  }

  verDetalle(data){
    this.dataVehiculo = data;
    this.actualizar = false;
    this.crear = false;
    this.detalle = true;
    this.textoCrear = "datos del vehiculo";

  }

  submitCrear(form){
    this._transporteService.createTransporte(this.token, form).subscribe(
      response => {
        if(response.status == 'success'){
          this._toastr.success('el vehiculo se ha creado con exito', 'LISTO');
          this.getTransportes();

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

  submitActualizar(form){
    this._transporteService.updateTransporte(this.token, form, this.dataVehiculo.id).subscribe(
      response => {
        if(response.status == 'success'){
          this._toastr.success('el vehiculo se ha actualizado correctamente', 'LISTO');
          this.getTransportes();

        }else{
          this._toastr.error('parece que ango anda mal, intentalo nuevamente', 'UPS');

        }
      },
      error =>{
        console.log(<any>error);
        this._toastr.error('parece que los datos ingresados no son correctos', 'UPS');

      }
    )

  }

  cerrar(){

    this.crear = false;
    this.actualizar = false;
    this.detalle = false;
    this.textoCrear = "todos los vehiculos"
    
  }


}
