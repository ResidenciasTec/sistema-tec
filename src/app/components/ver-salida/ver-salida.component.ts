import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { SalidaService } from "../../services/salida.service";


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

  constructor(
    private _router: Router,
		private _route: ActivatedRoute,
  	private _salidaService: SalidaService,
  	) { }

    ngOnInit(): void {
      window.scrollTo(0,0);
      this.token = localStorage.getItem('token');
      this.lastSalidas();
      this.getSalida();

      

    }
  
    getSalida(){
      this._route.params.subscribe(params => {
  
        let id = +params['id'];
  
        this._salidaService.getSalida(this.token, id).subscribe(
          response =>{
  
            if(response.status == 'success'){
              this.salida = response.elemento;
              console.log(response.elemento);
              console.log('todo ha salido bien');
              this.nombreSalida = this.salida.evento;
              console.log(this.nombreSalida);
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

    lastSalidas(){
      let crudo = JSON.parse(localStorage.getItem('salidas'));
      this.salidas = crudo.reverse().slice(0, 7);
  
    }

}
