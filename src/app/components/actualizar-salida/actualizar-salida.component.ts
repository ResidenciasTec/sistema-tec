import { Component, OnInit } from '@angular/core';
import { SalidaService } from "../../services/salida.service";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import {ToastrService} from "ngx-toastr";
import { NgxSpinnerService } from "ngx-spinner";


@Component({
  selector: 'app-actualizar-salida',
  templateUrl: './actualizar-salida.component.html',
  styleUrls: ['./actualizar-salida.component.scss'],
  providers: [SalidaService]
})
export class ActualizarSalidaComponent implements OnInit {
  public salidaForm: FormGroup;
  public identity;
  public token;
  public vehiculos;
  public departamentos;
  public status;
  public loading;
  public textoCrear;
  public form: FormGroup;
  salida: any;
  salidas;
  found: any;
  id;

  constructor(
    private _router: Router,
		private _route: ActivatedRoute,
    private _salidaService: SalidaService,
    private _formBuilder: FormBuilder, 
    private _toastr: ToastrService,
    private _spinner: NgxSpinnerService,
  	) 
  {
    this.identity = JSON.parse(localStorage.getItem('identity'));
    this.token = localStorage.getItem('token');
    this.textoCrear = "Actualice la solicitud de salida";
    this.loading = false;
   
  }

  ngOnInit(): void {
    window.scrollTo(0,0);
    this.vehiculos = JSON.parse(localStorage.getItem('vehiculos'));
    this.departamentos = JSON.parse(localStorage.getItem('departamentos'));
    this.salidas = JSON.parse(localStorage.getItem('salidas'));
    this.getSalida();
    this.buildForm();
  }

  getSalida(){
    this._route.params.subscribe(params => {
      this.id = +params['id'];
      this.found = this.salidas.find(element => element.id == this.id);
      this.salida = this.salidas.find(element => element.id == this.id);
    });
  
  }

  private buildForm() {

		this.form = this._formBuilder.group({
      usuario_id: new FormControl(this.found.usuario_id),
      vehiculo_id: new FormControl(this.found.vehiculo_id, { validators: [Validators.required], updateOn: 'change' }),
      depto_solicitante: new FormControl(this.found.depto_solicitante, { validators: [Validators.required], updateOn: 'change' }),
      chofer: new FormControl(this.found.chofer),
      destino: new FormControl(this.found.destino),
      descripcion: new FormControl(this.found.descripcion),
      fecha: new FormControl(this.found.fecha, { validators: [Validators.required], updateOn: 'change' }),
      hora_salida: new FormControl(this.found.hora_salida, { validators: [Validators.required], updateOn: 'change' }),
      hora_llegada: new FormControl(this.found.hora_llegada, { validators: [Validators.required], updateOn: 'change' })
		});

  }

  onSubmit(value){
    this._spinner.show();
    this._salidaService.updateSalida(this.token, value, this.found.id).subscribe(
      response =>{

        if(response){
          console.log(response);
          let crudo = JSON.stringify(response.elemento_actualizado);

          this._salidaService.getSalidas(this.token).subscribe(
            response =>{
              if(response.status == 'success'){
                this.salidas = response.elementos;
                localStorage.setItem('salidas', JSON.stringify(this.salidas));
                this._spinner.hide();
                window.scrollTo(0,0);
                this.status = 'success';
                this._toastr.success('La solicitud se ha actualizado correctamente.', 'SOLICITUD EXITOSA');

                //redireccion a inicio
				        this._router.navigate(['salidas/'+this.id]);
              }

            },
            error =>{
              this._spinner.hide();
              this._toastr.error('Algunos datos de la solicitud fueron erroneos', 'SOLICITUD FALLIDA');
            }


          );
          
   

        }else{
          this._spinner.hide();
        }

      },
      error => {
        console.log(<any>error);
        this._spinner.hide();
        this.status = 'error';

      }
      );
  }

}
