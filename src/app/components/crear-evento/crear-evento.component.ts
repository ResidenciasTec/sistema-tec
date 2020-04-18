import { Component, OnInit } from '@angular/core';
import { Evento } from '../../models/evento';
import { EventoService } from "../../services/evento.service";
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-crear-evento',
  templateUrl: './crear-evento.component.html',
  styleUrls: ['./crear-evento.component.scss'],
  providers: [EventoService]
})
export class CrearEventoComponent implements OnInit {
  public lugares;
  public token;
  public identity;
  public status;
  public textoCrear: String;
  public form: FormGroup;
  public departamentos;
  public espacios;
  public loading;
  evento: any;



  constructor(
        private _eventoService: EventoService,
        private _formBuilder: FormBuilder,
        private _toastr: ToastrService,
  	)
  	{
        this.token = localStorage.getItem("token");
        this.identity = JSON.parse(localStorage.getItem("identity"));
        this.textoCrear = "Crear una solicitud de evento";
        this.loading = false;
  	}

  ngOnInit(): void {
    window.scrollTo(0,0);
    this.departamentos = JSON.parse(localStorage.getItem('departamentos'));
    this.espacios = JSON.parse(localStorage.getItem('espacios'));
    this.buildForm();
  }

  private buildForm() {

		this.form = this._formBuilder.group({
      usuario_id: new FormControl(this.identity.id),
      espacio_id: new FormControl('', { validators: [Validators.required], updateOn: 'change' }),
      depto_solicitante: new FormControl('', { validators: [Validators.required], updateOn: 'change' }),
      evento: new FormControl('', { validators: [Validators.required], updateOn: 'change' }),
      actividades: new FormControl(''),
      fecha: new FormControl('', { validators: [Validators.required], updateOn: 'change' }),
      hora_inicio: new FormControl('', { validators: [Validators.required], updateOn: 'change' }),
      hora_final: new FormControl('', { validators: [Validators.required], updateOn: 'change' })
		});

  }

  onSubmit(value){
    this.loading = true;
    this._eventoService.crearEvento(this.token, value).subscribe(
      response =>{

        if(response){
          console.log(response);
          this.loading = false;
          this.status = 'success';
          let crudo = response.elemento_creado;
          this.evento = JSON.parse(localStorage.getItem('eventos'));
          this.evento.push(crudo);
          localStorage.setItem('eventos', JSON.stringify(this.evento));
          this._toastr.success('la solicitud se ha creado exitosamente', 'SOLICITUD EXITOSA');

        }else{
          this.loading = false;
        }

      },
      error => {
        this.loading = false;
        this._toastr.error('algunos datos de la solicitud fueron erroneos', 'SOLICITUD FALLIDA');
        this.status = 'error';

      }
      );
  }

}
