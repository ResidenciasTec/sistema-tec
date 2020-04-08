import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss'],
  providers: []
})
export class EventosComponent implements OnInit {
  public title:string;
  public textoCrear: string;

  public eventos;
  public loading;


  constructor(
  	
  	) { 
    this.title = "pagina de eventos";
    this.textoCrear = "Solicitudes de eventos"

  }

  ngOnInit(): void {
    this.eventos = JSON.parse(localStorage.getItem('eventos'));



    }
    
  

}
