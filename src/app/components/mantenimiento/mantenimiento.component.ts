import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-mantenimiento',
  templateUrl: './mantenimiento.component.html',
  styleUrls: ['./mantenimiento.component.scss'],
  providers: []
})
export class MantenimientoComponent implements OnInit {
  public title:string;
  public textoCrear: string;
  public token;
  public mantenimientos;
  public loading;

  constructor(

  	) { 
      this.title = "pagina de mantenimiento";
      this.textoCrear = "Solicitudes de mantenimientos"
  }

  ngOnInit(): void {
    window.scrollTo(0,0);
    this.mantenimientos = JSON.parse(localStorage.getItem('mantenimientos'));

    

  }



}
