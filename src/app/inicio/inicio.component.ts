import { Component, OnInit } from '@angular/core';
import {TransporteService} from "../services/transporte.service";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
  providers: [TransporteService],
})
export class InicioComponent implements OnInit {
  public title:string;
  identity: any;
  token: any;
  public transportes;

  constructor(
    private _transporteService: TransporteService,
  ) {
    this.title = "Sistema de control de inventarios del Instituto Tecnologico de Matamoros";
   }

  ngOnInit(): void {
    window.scrollTo(0,0);

    if(localStorage.getItem('identity')){
      this.identity = JSON.parse(localStorage.getItem('identity'));
      console.log(this.identity);
    }

    if(localStorage.getItem('token')){
      this.token = localStorage.getItem('token');
      console.log(this.token);
    }

    if(!localStorage.getItem('vehiculos') && this.token){

      this.getTransportes(this.token);
    }
  }

  getTransportes(token){
    this._transporteService.getTransportes(token).subscribe(
      response => {
        console.log(response);
        this.transportes = response.elementos;
        console.log(this.transportes);

        localStorage.setItem('vehiculos', JSON.stringify(this.transportes));

      },
      error => {
        console.log(error);
        console.log(JSON.stringify(this.token));
      }
      
    );

  }

}
