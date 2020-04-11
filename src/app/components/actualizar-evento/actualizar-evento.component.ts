import { Component, OnInit } from '@angular/core';
import { EventoService } from "../../services/evento.service";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-actualizar-evento',
  templateUrl: './actualizar-evento.component.html',
  styleUrls: ['./actualizar-evento.component.scss'],
  providers: [EventoService]
})
export class ActualizarEventoComponent implements OnInit {
  public eventos;
  public evento;
  public lugares;
  public token;
  public identity;
  public status;
  public textoCrear: String;
  public form: FormGroup;
  public departamentos;
  public espacios;
  public loading;
  found: any;
  id;

  constructor(
    private _router: Router,
		private _route: ActivatedRoute,
    private _eventoService: EventoService,
    private _formBuilder: FormBuilder,
  	) 
  {
    this.token = localStorage.getItem("token");
    this.identity = JSON.parse(localStorage.getItem("identity"));
    this.textoCrear = "actualiza los datos del evento";
    this.loading = false;
  	
  }

  ngOnInit(): void {
    window.scrollTo(0,0);
    this.departamentos = JSON.parse(localStorage.getItem('departamentos'));
    this.espacios = JSON.parse(localStorage.getItem('espacios'));
    this.eventos = JSON.parse(localStorage.getItem('eventos'));
    this.getEvento();
    this.buildForm();
    
  }

  getEvento(){
    this._route.params.subscribe(params => {
      this.id = +params['id'];
      this.found = this.eventos.find(element => element.id == this.id);
      this.evento = this.eventos.find(element => element.id == this.id);
    });
  
  }

  private buildForm() {

		this.form = this._formBuilder.group({
      usuario_id: new FormControl(this.found.usuario_id),
      espacio_id: new FormControl(this.found.espacio_id, { validators: [Validators.required], updateOn: 'change' }),
      depto_solicitante: new FormControl(this.found.depto_solicitante, { validators: [Validators.required], updateOn: 'change' }),
      evento: new FormControl(this.found.evento, { validators: [Validators.required], updateOn: 'change' }),
      actividades: new FormControl(this.found.actividades),
      fecha: new FormControl(this.found.fecha, { validators: [Validators.required], updateOn: 'change' }),
      hora_inicio: new FormControl(this.found.hora_inicio, { validators: [Validators.required], updateOn: 'change' }),
      hora_final: new FormControl(this.found.hora_final, { validators: [Validators.required], updateOn: 'change' })
		});

  }  




  onSubmit(value){
    this.loading = true;
    this._eventoService.updateEvento(this.token, value, this.found.id).subscribe(
      response =>{

        if(response){
          console.log(response);
          this.loading = false;
          let crudo = JSON.stringify(response.elemento_actualizado);

          this._eventoService.getEventos(this.token).subscribe(
            response =>{
              if(response.status == 'success'){
                this.eventos = response.elementos;
                localStorage.setItem('eventos', JSON.stringify(this.eventos));
                this.loading = false;
                this.status = 'success';

                //redireccion a inicio
				        this._router.navigate(['eventos/'+this.id]);
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
