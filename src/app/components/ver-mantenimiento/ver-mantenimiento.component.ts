import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { MantenimientoService } from "../../services/mantenimiento.service";
import { NgxSpinnerService } from "ngx-spinner";
import * as moment from 'moment';
import 'moment/locale/es';

import * as jsPDF from 'jspdf';
import 'jspdf-autotable'
import {UserOptions} from "jspdf-autotable"


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
  generar_pdf: string;
  descargar_pdf: string;
  admin;

  constructor(
    private _router: Router,
		private _route: ActivatedRoute,
    private _mantenimientoService: MantenimientoService,
    private _spinner: NgxSpinnerService,
  	) {
      this.departamento_text = "Pedido por el departamento:";
      this.servicio_text = "Tipo de servicio:";
      this.user_text = "Creado por el usuario";
      this.generar_pdf = "Generar pdf";
      this.descargar_pdf = "Descargar pdf";
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
              console.log('Algo ha salido mal');
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


    downloadPdf(){
      this._spinner.show();
      const doc = new jsPDF('portrait', 'px', 'a4');
  
      doc.autoTable({
        head: [
          ['solicitud de mantenimiento', '']
        ],
        body: [
          ['Mantenimiento de tipo'],
          [this.mantenimiento.tipo],
          ['Pedido por el departamento', this.mantenimiento.departamento.departamento],
          ['Se llevará a cabo', 'Empieza a ' + this.mantenimiento.hora_inicio + ' y termina a las '+ this.mantenimiento.hora_final ],
          ['Status del servicio', this.mantenimiento.servicio.status ]
        ]
    })
      this._spinner.hide();
      doc.save('document.pdf');
    }
  
    showPdf(){
      const doc = new jsPDF('portrait', 'px', 'a4');
      
      doc.autoTable({
        head: [
          ['Solicitud de mantenimiento', '']
        ],
        body: [
          ['Mantenimiento de tipo'],
          [this.mantenimiento.tipo],
          ['Pedido por el departamento', this.mantenimiento.departamento.departamento],
          ['Se llevará a cabo', 'Empieza a ' + this.mantenimiento.hora_inicio + ' y termina a las '+ this.mantenimiento.hora_final ],
          ['Status del servicio', this.mantenimiento.servicio.status ]
        ]
    })
  
      doc.output('dataurlnewwindow');
    }
}
