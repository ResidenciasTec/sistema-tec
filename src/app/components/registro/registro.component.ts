import { Component, OnInit } from '@angular/core';
import {variableService} from "../../services/variables.service"
import {SalidaService} from "../../services/salida.service"
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
  providers: [SalidaService, variableService]
})
export class RegistroComponent implements OnInit {
  textoCrear: string;
  token: any;
  salidas: any;
  total: any;
  last_page: any;
  next_page_url: any;
  current_page: any;
  prev_page_url: any;

  constructor(
    private _salidaService: SalidaService,
    private _spinner: NgxSpinnerService,
    private _variableService: variableService,
  ) 
  {
    this.textoCrear = "Solicitudes de salidas"
    this.token = this._variableService.getToken();
   }

  ngOnInit(): void {
    window.scrollTo(0,0);
    this.getPorMes();
  }

  getPorMes(){
    this._spinner.show();
    this._salidaService.getPorMes(this.token).subscribe(
      response => {
        if(response.status == 'success'){
          this.salidas = response.elementos.data;
          this.total = response.elementos.total;
          this.last_page = response.elementos.last_page;
          this.current_page = response.elementos.current_page;
          this.next_page_url = response.elementos.next_page_url;
          this.prev_page_url = response.elementos.prev_page_url;
          this._spinner.hide();

        }else{
          console.log('entra y se regresa')
          this._spinner.hide();

        }
        

      },
      error => {
        this._spinner.hide();
        console.log(<any>error);

      }
    )

  }


}
