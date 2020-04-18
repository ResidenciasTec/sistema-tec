import { Component, OnInit } from '@angular/core';
import { MantenimientoService } from "../../services/mantenimiento.service";
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-crear-mantenimiento',
  templateUrl: './crear-mantenimiento.component.html',
  styleUrls: ['./crear-mantenimiento.component.scss'],
  providers: [MantenimientoService]
})
export class CrearMantenimientoComponent implements OnInit {
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

  constructor(
    private _mantenimientoService: MantenimientoService,
    private _formBuilder: FormBuilder,
    private _toastr: ToastrService,
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
    this.buildForm();
  }


  private buildForm() {

		this.form = this._formBuilder.group({
      usuario_id: new FormControl(this.identity.id),
      servicio_id: new FormControl('', { validators: [Validators.required], updateOn: 'change' }),
      tipo: new FormControl('', { validators: [Validators.required], updateOn: 'change' }),
      depto_solicitante: new FormControl('', { validators: [Validators.required], updateOn: 'change' }),
      asignado_a: new FormControl('', { validators: [Validators.required], updateOn: 'change' }),
      trabajo_realizado: new FormControl('', { validators: [Validators.required], updateOn: 'change' }),
      equipo_proteccion: new FormControl(''),
      fecha: new FormControl('', { validators: [Validators.required], updateOn: 'change' }),
      hora_inicio: new FormControl('', { validators: [Validators.required], updateOn: 'change' }),
      hora_final: new FormControl('', { validators: [Validators.required], updateOn: 'change' })
		});

  }

  onSubmit(value){
    this.loading = true;
    this._mantenimientoService.createMantenimiento(this.token, value).subscribe(
      response => {
        if(response){
          this.loading = false;
          this.status = 'success';
          let crudo = response.elemento_creado;
          this.mantenimiento = JSON.parse(localStorage.getItem('mantenimientos'));
          this.mantenimiento.push(crudo);
          localStorage.setItem('mantenimientos', JSON.stringify(this.mantenimiento));
          this._toastr.success('la solicitud se ha creado exitosamente', 'SOLICITUD EXITOSA');
        }else{
          this.loading = false;
          this.status = 'error';
        }

      },
      error => {
        console.log(<any>error);
        this.loading = false;
        this._toastr.error('algunos datos de la solicitud fueron erroneos', 'SOLICITUD FALLIDA');
        this.status = 'error';
      }
      );

  }

}
