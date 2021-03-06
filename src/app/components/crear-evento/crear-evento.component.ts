import { Component, OnInit } from '@angular/core';
import { Evento } from '../../models/evento';
import { EventoService } from "../../services/evento.service";
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import {ToastrService} from "ngx-toastr";
import { NgxSpinnerService } from "ngx-spinner";

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
        private _spinner: NgxSpinnerService,
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
    this._spinner.show();
    this._eventoService.crearEvento(this.token, value).subscribe(
      response =>{

        if(response){
          console.log(response);
          this.status = 'success';
          let crudo = response.elemento_creado;
          this.evento = JSON.parse(localStorage.getItem('eventos'));
          this.evento.push(crudo);
          localStorage.setItem('eventos', JSON.stringify(this.evento));
          this.form.reset();
          window.scrollTo(0,0);
          this._toastr.success('La solicitud se ha creado exitosamente', 'SOLICITUD EXITOSA');
          this._spinner.hide();

        }else{
          this._spinner.hide();
        }

      },
      error => {
        this._spinner.hide();
        this._toastr.error('Algunos datos de la solicitud fueron erroneos', 'SOLICITUD FALLIDA');
        this.status = 'error';

      }
      );
  }

}
