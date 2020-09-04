import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { EventoService } from "../../services/evento.service";
import { NgxSpinnerService } from "ngx-spinner";
import * as moment from 'moment';
import 'moment/locale/es';

import * as jsPDF from 'jspdf';
import 'jspdf-autotable'
import {UserOptions} from "jspdf-autotable"


interface solicitud extends jsPDF {

  autoTable: (options: UserOptions) => jsPDF;
}


@Component({
  selector: 'app-ver-evento',
  templateUrl: './ver-evento.component.html',
  styleUrls: ['./ver-evento.component.scss'],
  providers: [EventoService]
})
export class VerEventoComponent implements OnInit {
  public token;
  evento: any;
  nombreEvento: any;
  eventos;
  departamento: any;
  espacio: any;
  usuario: any;
  textoCrear: any;
  privilegios: any;
  fecha;
  fechados;
  departamento_text;
  user_text;
  evento_text;
  admin;
  generar_pdf;
  descargar_pdf;
  no_privilegios: string;

  constructor(
    private _router: Router,
		private _route: ActivatedRoute,
    private _eventoService: EventoService,
    private _spinner: NgxSpinnerService,
  	) {
      this.textoCrear = "Solicitud seleccionada",
      this.departamento_text = "Pedido por el departamento:";
      this.user_text = "Creado por el usuario:";
      this.evento_text = "Lugar del evento";
      this.generar_pdf = "Generar pdf";
      this.descargar_pdf = "Descargar pdf";
     }



  ngOnInit(): void {
    window.scrollTo(0,0);
    this.token = localStorage.getItem('token');
    
    this.lastEvents();
    this.getEvento();
  

  }


  getEvento(){
    
    this._route.params.subscribe(params => {

      let id = +params['id'];
      this._spinner.show();

      this._eventoService.getEvento(this.token, id).subscribe(
        response =>{
          console.log(response);

          if(response.status == 'success'){
            this.evento = response.elemento;
            this.textoCrear = this.evento.evento;
            this._spinner.hide();
            window.scrollTo(0,0);


            console.log(response.elemento);

            console.log('todo ha salido bien');
            this.nombreEvento = this.evento.evento;
            console.log(this.nombreEvento);
            this.fechados = moment(this.evento.fecha, 'YYYY-MM-DD')
            this.fecha = moment(this.fechados).format('DD [de] MMMM [del] YYYY');
          }else{
            console.log('algo ha salido mal');
          }
  
        },
        error =>{
          console.log(<any>error);
  
        }
  
  
      );


    });

  }

  lastEvents(){
    let crudo = JSON.parse(localStorage.getItem('eventos'));
    this.eventos = crudo.reverse().slice(0, 7);

  }

  downloadPdf(){
    this._spinner.show();
    const doc = new jsPDF('portrait', 'px', 'a4');

    doc.autoTable({
      head: [
        ['Solicitud de eventos', '']
      ],
      body: [
        ['Evento solicitado'],
        [this.evento.evento],
        ['Pedido por el departamento', this.evento.departamento.departamento],
        ['Se llevará a cabo', 'empieza a ' + this.evento.hora_inicio + ' y termina a las'+ this.evento.hora_final ],
        ['Lugar del evento', this.evento.espacio ]
      ]
  })
    this._spinner.hide();
    doc.save('document.pdf');
  }

  showPdfnone(){
    const doc = new jsPDF('portrait', 'px', 'a4');
    
    doc.autoTable({
      head: [
        ['Solicitud de eventos', '']
      ],
      body: [
        [{ content: 'Evento solicitado', colSpan: 2, rowSpan: 1, styles: { halign: 'center' } }],
        [{ content: this.evento.evento, colSpan: 1, rowSpan: 1, styles: { halign: 'center' } }],
        [{ content: 'Pedido por el departamento', colSpan: 1, rowSpan: 1, styles: { halign: 'center' } }, this.evento.departamento.departamento],
        [{ content: 'Se llevará a cabo', colSpan: 1, rowSpan: 1, styles: { halign: 'center' } }, 'empieza a ' + this.evento.hora_inicio + ' y termina a las'+ this.evento.hora_final],
        ['Lugar del evento', this.evento.espacio.espacio ]
      ]
  })

    doc.output('dataurlnewwindow');
  }

  showPdf(){
    
      var columns = [
        {title: "ID", dataKey: "id"},
        {title: "Name", dataKey: "name"}, 
        {title: "Country", dataKey: "country"}, 
       
    ];
    var rows = [
        {"id": 1, "name": "Shaw", "country": "Tanzania"},
        {"id": 2, "name": "Nelson", "country": "Kazakhstan"},
        {"id": 3, "name": "Garcia", "country": "Madagascar"},
        
    ];
     
    var doc = new jsPDF('p', 'pt');
    doc.autoTable(columns, rows, {
        styles: {fillColor: [100, 255, 255]},
        columnStyles: {
          id: {fillColor: 255}
        },
        margin: {top: 60},
        beforePageContent: function(data) {
          doc.text("Header", 40, 30);
        }
    });
    doc.output('dataurlnewwindow');
    }
  

}
