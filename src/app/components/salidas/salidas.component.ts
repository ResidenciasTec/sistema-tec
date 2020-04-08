import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-salidas',
  templateUrl: './salidas.component.html',
  styleUrls: ['./salidas.component.scss'],
  providers: []
})
export class SalidasComponent implements OnInit {

  public textoCrear: string;
  public token;
  public salidas;
  public loading;

  constructor(
 
    ) 
    {
      this.textoCrear = "Solicitudes de salidas"

     }

  ngOnInit(): void {
    window.scrollTo(0,0);
    this.salidas = JSON.parse(localStorage.getItem('salidas'));

    
  }




}
