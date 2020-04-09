import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { MantenimientoService } from "../../services/mantenimiento.service";

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

  constructor(
    private _router: Router,
		private _route: ActivatedRoute,
  	private _mantenimientoService: MantenimientoService,
  	) { }

    ngOnInit(): void {
      window.scrollTo(0,0);
      this.token = localStorage.getItem('token');
      this.lastMantenimientos();
      this.getMantenimiento();
    }
  
    getMantenimiento(){
      this._route.params.subscribe(params => {
  
        let id = +params['id'];
  
        this._mantenimientoService.getMantenimiento(this.token, id).subscribe(
          response =>{
  
            if(response.status == 'success'){
              this.mantenimiento = response.elemento;
              console.log(response.elemento);
              console.log('todo ha salido bien');
              this.nombreMantenimiento = this.mantenimiento.evento;
              console.log(this.nombreMantenimiento);
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

    lastMantenimientos(){
      let crudo = JSON.parse(localStorage.getItem('mantenimientos'));
      this.mantenimientos = crudo.reverse().slice(0, 7);
  
    }
}
