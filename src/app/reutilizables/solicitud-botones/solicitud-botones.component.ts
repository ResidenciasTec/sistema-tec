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
    this.token = _variableService.getToken();

    this.verificado = {
      "status": "verificado"
    }

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

  verificarEvento(){
    this._spinner.show();
    this._eventoService.updateEvento(this.token, this.verificado, this.evento.id).subscribe(
      response => {
        if(response.status == "success"){
          this._spinner.hide();
          this._toastr.success('la solicitud se ha verificado.', 'SOLICITUD EXITOSA');
          this._router.navigate(['admin/1']);

        }else{
          this._spinner.hide();
          this._toastr.error('la solicitud no se ha podido verificar', 'SOLICITUD FALLIDA');
        }

      },

      error => {
        this._spinner.hide();
        this._toastr.error('la solicitud no se ha podido verificar', 'SOLICITUD FALLIDA');
        console.log(<any>error);

      }
    )
  }

  aprobarEvento(){
    this._spinner.show();
    this._eventoService.updateEvento(this.token, this.aprobado, this.evento.id).subscribe(
      response => {
        if(response.status == "success"){
          this._spinner.hide();
          this._toastr.success('la solicitud ha sido aprobada.', 'SOLICITUD EXITOSA');
          this._router.navigate(['admin/2']);

        }else{
          this._spinner.hide();
          this._toastr.error('la solicitud no se ha podido aprobar', 'SOLICITUD FALLIDA');
        }

      },

      error => {
        this._spinner.hide();
        this._toastr.error('la solicitud no se ha podido verificar', 'SOLICITUD FALLIDA');
        console.log(<any>error);

      }
    )
  }

    verificarSalida(){
    this._spinner.show();
    this._SalidaService.updateSalida(this.token, this.verificado, this.salida.id).subscribe(
      response => {
        if(response.status == "success"){
          this._spinner.hide();
          this._toastr.success('la solicitud se ha verificado.', 'SOLICITUD EXITOSA');
          this._router.navigate(['/admin/1']);

        }else{
          this._spinner.hide();
          this._toastr.error('la solicitud no se ha podido verificar', 'SOLICITUD FALLIDA');
        }

      },

      error => {
        this._spinner.hide();
        this._toastr.error('la solicitud no se ha podido verificar', 'SOLICITUD FALLIDA');
        console.log(<any>error);

      }
    )
  }

  

  aprobarSalida(){
    this._spinner.show();
    this._SalidaService.updateSalida(this.token, this.aprobado, this.salida.id).subscribe(
      response => {
        if(response.status == "success"){
          this._spinner.hide();
          this._toastr.success('la solicitud ha sido aprobada.', 'SOLICITUD EXITOSA');
          this._router.navigate(['/admin/2']);

        }else{
          this._spinner.hide();
          this._toastr.error('la solicitud no se ha podido aprobar', 'SOLICITUD FALLIDA');
        }

      },

      error => {
        this._spinner.hide();
        this._toastr.error('la solicitud no se ha podido verificar', 'SOLICITUD FALLIDA');
        console.log(<any>error);

      }
    )
  }

  verificarMantenimiento(){
    this._spinner.show();
    this._mantenimientoService.updateMantenimiento(this.token, this.verificado, this.salida.id).subscribe(
      response => {
        if(response.status == "success"){
          this._spinner.hide();
          this._toastr.success('la solicitud se ha verificado.', 'SOLICITUD EXITOSA');
          this._router.navigate(['/admin/1']);

        }else{
          this._spinner.hide();
          this._toastr.error('la solicitud no se ha podido verificar', 'SOLICITUD FALLIDA');
        }

      },

      error => {
        this._spinner.hide();
        this._toastr.error('la solicitud no se ha podido verificar', 'SOLICITUD FALLIDA');
        console.log(<any>error);

      }
    )
  }

  aprobarMantenimiento(){
    this._spinner.show();
    this._mantenimientoService.updateMantenimiento(this.token, this.aprobado, this.salida.id).subscribe(
      response => {
        if(response.status == "success"){
          this._spinner.hide();
          this._toastr.success('la solicitud ha sido aprobada.', 'SOLICITUD EXITOSA');
          this._router.navigate(['/admin/2']);

        }else{
          this._spinner.hide();
          this._toastr.error('la solicitud no se ha podido aprobar', 'SOLICITUD FALLIDA');
        }

      },

      error => {
        this._spinner.hide();
        this._toastr.error('la solicitud no se ha podido verificar', 'SOLICITUD FALLIDA');
        console.log(<any>error);

      }
    )
  }

}
