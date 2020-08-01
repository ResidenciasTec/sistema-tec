import { Component, OnInit } from '@angular/core';
import { MantenimientoService } from "../../services/mantenimiento.service";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import {ToastrService} from "ngx-toastr";
import { NgxSpinnerService } from "ngx-spinner";


@Component({
  selector: 'app-actualizar-mantenimiento',
  templateUrl: './actualizar-mantenimiento.component.html',
  styleUrls: ['./actualizar-mantenimiento.component.scss'],
  providers: [MantenimientoService]
})
export class ActualizarMantenimientoComponent implements OnInit {
  public mantenimientos;
  public token;
  public identity;
  public status;
  public lugares;
  public textoCrear: String;
  public form: FormGroup;
  public departamentos;
  public statusorders;
  public loading;
  mantenimiento: any;
  found: any;
  id;
  

  constructor(
    private _router: Router,
		private _route: ActivatedRoute,
    private _mantenimientoService: MantenimientoService,
    private _formBuilder: FormBuilder,
    private _toastr: ToastrService,
    private _spinner: NgxSpinnerService,
  	) 
  {
    this.token = localStorage.getItem('token');
    this.identity = JSON.parse(localStorage.getItem('identity'));
    this.textoCrear = "Crear una solicitud de mantenimiento";
    this.loading = false;
  
  }

  ngOnInit(): void {
    window.scrollTo(0,0);
    this.statusorders = JSON.parse(localStorage.getItem('statusorders'));
    this.departamentos = JSON.parse(localStorage.getItem('departamentos'));
    this.mantenimientos = JSON.parse(localStorage.getItem('mantenimientos'));
    this.getMantenimiento();
    this.buildForm();
  }

  getMantenimiento(){
    this._route.params.subscribe(params => {
      this.id = +params['id'];
      this.found = this.mantenimientos.find(element => element.id == this.id);
      this.mantenimiento = this.mantenimientos.find(element => element.id == this.id);
    });
  
  }

  private buildForm() {

		this.form = this._formBuilder.group({
      usuario_id: new FormControl(this.identity.id),
      servicio_id: new FormControl(this.found.servicio_id, { validators: [Validators.required], updateOn: 'change' }),
      tipo: new FormControl(this.found.tipo, { validators: [Validators.required], updateOn: 'change' }),
      depto_solicitante: new FormControl(this.found.depto_solicitante, { validators: [Validators.required], updateOn: 'change' }),
      asignado_a: new FormControl(this.found.asignado_a, { validators: [Validators.required], updateOn: 'change' }),
      trabajo_realizado: new FormControl(this.found.trabajo_realizado, { validators: [Validators.required], updateOn: 'change' }),
      equipo_proteccion: new FormControl(this.found.equipo_proteccion),
      fecha: new FormControl(this.found.fecha, { validators: [Validators.required], updateOn: 'change' }),
      hora_inicio: new FormControl(this.found.hora_inicio, { validators: [Validators.required], updateOn: 'change' }),
      hora_final: new FormControl(this.found.hora_final, { validators: [Validators.required], updateOn: 'change' })
		});

  }

  onSubmit(value){
    this._spinner.show();
    this._mantenimientoService.updateMantenimiento(this.token, value, this.found.id).subscribe(
      response =>{

        if(response){
          console.log(response);
          let crudo = JSON.stringify(response.elemento_actualizado);

          this._mantenimientoService.getMantenimientos(this.token).subscribe(
            response =>{
              if(response.status == 'success'){
                this.mantenimientos = response.elementos;
                localStorage.setItem('mantenimientos', JSON.stringify(this.mantenimientos));
                this._spinner.hide();
                window.scrollTo(0,0);
                this.status = 'success';
                this._toastr.success('la solicitud se ha actualizado correctamente.', 'SOLICITUD EXITOSA');

                //redireccion a inicio
				        this._router.navigate(['mantenimiento/'+this.id]);
              }

            },
            error =>{
              this._spinner.hide();
              this._toastr.error('algunos datos de la solicitud fueron erroneos', 'SOLICITUD FALLIDA');
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
