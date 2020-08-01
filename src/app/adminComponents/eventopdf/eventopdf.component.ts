import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { EventoService } from "../../services/evento.service";
import { NgxSpinnerService } from "ngx-spinner";
import { variableService } from "../../services/variables.service";
import * as jsPDF from 'jspdf';
import 'jspdf-autotable';


@Component({
  selector: 'app-eventopdf',
  templateUrl: './eventopdf.component.html',
  styleUrls: ['./eventopdf.component.scss'],
  providers: [EventoService, variableService]
})
export class EventopdfComponent implements OnInit {

  @ViewChild('generador') generador:ElementRef;

  token: string;
  evento: any;
  textoCrear: any;

  constructor(
    private _router: Router,
		private _route: ActivatedRoute,
    private _eventoService: EventoService,
    private _spinner: NgxSpinnerService,
    private _variableService: variableService
  ) {
    this.textoCrear = "genera la soliciitud de eventos";
    this.token = this._variableService.getToken();
   }

  ngOnInit(): void {
    window.scrollTo(0,0);
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
            this._spinner.hide();
            window.scrollTo(0,0);

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

  

  public openPDF():void {
    let DATA = this.generador.nativeElement;
    let doc = new jsPDF('p','pt', 'a4');
    doc.fromHTML(DATA.innerHTML,15,15);
    doc.output('dataurlnewwindow');
  }

  public downloadPDF():void {
    let DATA = this.generador.nativeElement;
    let doc = new jsPDF('p','pt', 'a4');

    let handleElement = {
      '#editor':function(element,renderer){
        return true;
      }
    };
    doc.fromHTML(DATA.innerHTML,15,15,{
      'width': 200,
      'elementHandlers': handleElement
    });

    doc.save('angular-demo.pdf');
  }

}
