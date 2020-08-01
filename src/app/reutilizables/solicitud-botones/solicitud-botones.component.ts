import { Component, OnInit, Input } from '@angular/core';
import {EventoService} from "../../services/evento.service";
import {MantenimientoService} from "../../services/mantenimiento.service";
import {SalidaService} from "../../services/salida.service";
import { variableService } from "../../services/variables.service";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { NgxSpinnerService } from "ngx-spinner";
import {ToastrService} from "ngx-toastr";


@Component({
  selector: 'app-solicitud-botones',
  templateUrl: './solicitud-botones.component.html',
  styleUrls: ['./solicitud-botones.component.scss'],
  providers: [EventoService, variableService, MantenimientoService, SalidaService]
})
export class SolicitudBotonesComponent implements OnInit {

  @Input() evento: any;
  @Input() mantenimiento: any;
  @Input() salida: any;
  @Input() vehiculo: any;
  @Input() departamento: any;
  privilegios: any;
  no_privilegios: string;
  token: any;
  verificado: { status: string; };
  aprobado: { status: string; };
  
  constructor(
    private _variableService: variableService,
    private _eventoService: EventoService,
    private _mantenimientoService: MantenimientoService,
    private _SalidaService: SalidaService,
    private _router: Router,
    private _route: ActivatedRoute,
    private _toastr: ToastrService,
    private _spinner: NgxSpinnerService,
  ) {
    this.token = this._variableService.getToken();


    this.aprobado = {
      "status": "aprobado"
    }
   }

  ngOnInit(): void {
    this.getPrivilegios();
  }

  getPrivilegios(){
    if(localStorage.getItem('privilegios')){
      this.privilegios = JSON.parse(localStorage.getItem('privilegios'));
    }else if(localStorage.getItem('no-privilegios')){
      this.no_privilegios = localStorage.getItem('no-privilegios');

    }
  }

}
