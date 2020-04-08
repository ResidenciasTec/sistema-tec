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
    window.scrollTo(0,0);
    this.eventos = JSON.parse(localStorage.getItem('eventos'));



    }
    
  

}
