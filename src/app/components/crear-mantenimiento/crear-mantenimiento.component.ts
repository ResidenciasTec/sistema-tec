import { Component, OnInit } from '@angular/core';
import { MantenimientoService } from "../../services/mantenimiento.service";
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

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

  constructor(
    private _mantenimientoService: MantenimientoService,
    private _formBuilder: FormBuilder,
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
        }else{
          this.loading = false;
          this.status = 'error';
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
