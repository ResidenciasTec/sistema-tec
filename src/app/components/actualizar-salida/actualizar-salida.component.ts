import { Component, OnInit } from '@angular/core';
import { SalidaService } from "../../services/salida.service";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

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
  	) 
  {
    this.identity = JSON.parse(localStorage.getItem('identity'));
    this.token = localStorage.getItem('token');
    this.textoCrear = "actualiza la solicitud de salida";
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
    this.loading = true;
    this._salidaService.updateSalida(this.token, value, this.found.id).subscribe(
      response =>{

        if(response){
          console.log(response);
          this.loading = false;
          let crudo = JSON.stringify(response.elemento_actualizado);

          this._salidaService.getSalidas(this.token).subscribe(
            response =>{
              if(response.status == 'success'){
                this.salidas = response.elementos;
                localStorage.setItem('salidas', JSON.stringify(this.salidas));
                this.loading = false;
                this.status = 'success';

                //redireccion a inicio
				        this._router.navigate(['salidas/'+this.id]);
              }

            },
            error =>{
              this.loading = false;
              console.log('algo salio mal');
            }


          );
          
   

        }else{
          this.loading = false;
        }

      },
      error => {
        console.log(<any>error);
        this.loading = false;
        this.status = 'error';

      }
      );
  }

}
