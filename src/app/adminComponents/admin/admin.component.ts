import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute, Params } from "@angular/router";
 
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  volver: string;
  solicitudes: string;
  id: number;
  verificado: boolean;
  aprobado: boolean;
  constructor(
    private _location: Location,
    private _router: Router,
    private _route: ActivatedRoute,
    ) { 
    this.volver = "Volver a la solicitud";
    this.solicitudes = "Volver al inicio";
    this.verificado = false;
    this.aprobado = false;
  }

  ngOnInit(): void {
    window.scrollTo(0,0);
    this.getParams();
  }

  getParams(){

    this._route.params.subscribe(params => {

      this.id = +params['id'];

        if(this.id == 1){
          this.verificado = true;
          this.aprobado = false;
        }else if(this.id == 2){
          this.aprobado = true;
          this.verificado = false;
        }
      });
  }

  back() {
    this._location.back(); // <-- go back to previous location on cancel
  }

}
