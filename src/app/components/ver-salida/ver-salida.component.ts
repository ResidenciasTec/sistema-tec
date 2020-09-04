import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { SalidaService } from "../../services/salida.service";
import { NgxSpinnerService } from "ngx-spinner";
import * as moment from 'moment';
import 'moment/locale/es';
import { Observable } from 'rxjs';

import * as jsPDF from 'jspdf';
import 'jspdf-autotable'
import {UserOptions} from "jspdf-autotable"



@Component({
  selector: 'app-ver-salida',
  templateUrl: './ver-salida.component.html',
  styleUrls: ['./ver-salida.component.scss'],
  providers: [SalidaService]
})
export class VerSalidaComponent implements OnInit {

  public token;
  public salida;
  public nombreSalida;
  salidas;
  departamento: any;
  vehiculo: any;
  usuario: any;
  departamento_text;
  vehiculo_text;
  user_text;
  fechados: moment.Moment;
  fecha: string;
  textoCrear;
  loading;
  generar_pdf: string;
  descargar_pdf: string;
  admin;

  constructor(
    private _router: Router,
		private _route: ActivatedRoute,
    private _salidaService: SalidaService,
    private _spinner: NgxSpinnerService,
  	) {
      this.departamento_text = "Pedido por el departamento:";
      this.vehiculo_text = "Vehículo seleccionado:";
      this.user_text = "Creado por el usuario";
      this.textoCrear = "El destino no se ha especificado";
      this.loading = false;
      this.generar_pdf = "Generar pdf";
      this.descargar_pdf = "Descargar pdf";
    }

    ngOnInit(): void {
      window.scrollTo(0,0);
      this.token = localStorage.getItem('token');
      this.getSalida();
      this.lastSalidas(); 

    }
  
    getSalida(){
      this._route.params.subscribe(params => {

        let id = +params['id'];
        this._spinner.show();
  
        this._salidaService.getSalida(this.token, id).subscribe(
          response =>{
            if(response.status == 'success'){
              this.salida = response.elemento;
              console.log(response.elemento);
              console.log('todo ha salido bien');
              this.nombreSalida = this.salida.evento;
              console.log(this.nombreSalida);
              
              this._spinner.hide();
              window.scrollTo(0,0);
              this.fechados = moment(this.salida.fecha, 'YYYY-MM-DD')
              this.fecha = moment(this.fechados).format('DD [de] MMMM [del] YYYY');

            }else{
              this._spinner.hide();
              console.log('algo ha salido mal');
              console.log('salio mal')
            }
    
          },
          error =>{
            this._spinner.hide();
            console.log(<any>error);
    
          }
    
    
        );
  
  
      });
  
    }

    lastSalidas(){
      let crudo = JSON.parse(localStorage.getItem('salidas'));
      this.salidas = crudo.reverse().slice(0, 7);
  
    }

    downloadPdf(){
      this._spinner.show();
      const doc = new jsPDF('portrait', 'px', 'a4');
  
      doc.autoTable({
        head: [
          ['Solicitud de la salida', '']
        ],
        body: [
          ['Destino de la salida'],
          ['Aquí va el destino de la salida...'],
          ['Pedido por el departamento', this.salida.departamento.departamento],
          ['Se llevará a cabo', 'empieza a ' + this.salida.hora_salida + ' y termina a las '+ this.salida.hora_llegada ],
          ['Status de la salida', this.salida.status ]
        ]
    })
      this._spinner.hide();
      doc.save('document.pdf');
    }
  
    showPdf(){
      const doc = new jsPDF('portrait', 'px', 'a4');
      
      doc.autoTable({
        head: [
          ['Solicitud de salida', '']
        ],
        body: [
          ['Destino de la salida'],
          ['Aquí va el destino de la salida...'],
          ['Pedido por el departamento', this.salida.departamento.departamento],
          ['Se llevará a cabo', 'empieza a ' + this.salida.hora_salida + ' y termina a las '+ this.salida.hora_llegada ],
          ['Status de la salida', this.salida.status ]
        ]
    })
  
      doc.output('dataurlnewwindow');
    }

}
