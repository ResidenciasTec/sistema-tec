import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { MantenimientoService } from "../../services/mantenimiento.service";
import { NgxSpinnerService } from "ngx-spinner";
import * as moment from 'moment';
import 'moment/locale/es';

@Component({
  selector: 'app-ver-mantenimiento',
  templateUrl: './ver-mantenimiento.component.html',
  styleUrls: ['./ver-mantenimiento.component.scss'],
  providers: [MantenimientoService]
})
export class VerMantenimientoComponent implements OnInit {

  public token;
  public mantenimiento;
  public nombreMantenimiento;
  mantenimientos;
  departamento: any;
  servicio: any;
  usuario: any;
  departamento_text;
  servicio_text;
  user_text;
  fechados: moment.Moment;
  fecha: string;
  textoCrear;

  constructor(
    private _router: Router,
		private _route: ActivatedRoute,
    private _mantenimientoService: MantenimientoService,
    private _spinner: NgxSpinnerService,
  	) {
      this.departamento_text = "pedido por el departamento:";
      this.servicio_text = "tipo de servicio:";
      this.user_text = "creado por el usuario";
     }

    ngOnInit(): void {
      window.scrollTo(0,0);
      this.token = localStorage.getItem('token');
      this.lastMantenimientos();
      this.getMantenimiento();
    }
  
    getMantenimiento(){
      this._route.params.subscribe(params => {
  
        let id = +params['id'];
        this._spinner.show();
  
        this._mantenimientoService.getMantenimiento(this.token, id).subscribe(
          response =>{
  
            if(response.status == 'success'){
              this.mantenimiento = response.elemento;
              console.log(response.elemento);
              console.log('todo ha salido bien');
              this.nombreMantenimiento = this.mantenimiento.evento;
              console.log(this.nombreMantenimiento);
              this._spinner.hide();
              window.scrollTo(0,0);
              this.fechados = moment(this.mantenimiento.fecha, 'YYYY-MM-DD')
              this.fecha = moment(this.fechados).format('DD [de] MMMM [del] YYYY');
            }else{
              this._spinner.hide();
              console.log('algo ha salido mal');
            }
    
          },
          error =>{
            this._spinner.hide();
            console.log(<any>error);
    
          }
    
    
        );
  
  
      });
  
    }

    lastMantenimientos(){
      let crudo = JSON.parse(localStorage.getItem('mantenimientos'));
      this.mantenimientos = crudo.reverse().slice(0, 7);
  
    }
}
