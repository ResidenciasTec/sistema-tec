import { Component, OnInit } from '@angular/core';
import {variableService} from "../../services/variables.service"
import {SalidaService} from "../../services/salida.service"
import { NgxSpinnerService } from "ngx-spinner";
import { Salida } from 'src/app/models/salida';



@Component({
  selector: 'app-salidas',
  templateUrl: './salidas.component.html',
  styleUrls: ['./salidas.component.scss'],
  providers: [SalidaService, variableService]
})
export class SalidasComponent implements OnInit {

  public textoCrear: string;
  public token;
  public salidas;
  public total;
  public last_page;
  public current_page;
  public next_page_url;
  public prev_page_url;


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
    this.getSalidas();
    
  }

  getSalidas(){
    this._spinner.show();
    this._salidaService.getSalidas(this.token).subscribe(
      response => {
        if(response.status == 'success'){
          this.salidas = response.elementos.data;
          localStorage.setItem('eventos',JSON.stringify(response.elementos.data));
          this.total = response.elementos.total;
          this.last_page = response.elementos.last_page;
          this.current_page = response.elementos.current_page;
          this.next_page_url = response.elementos.next_page_url;
          this.prev_page_url = response.elementos.prev_page_url;
          window.scrollTo(0,0);
          this._spinner.hide();

        }else{
          this._spinner.hide();

        }

      },
      error => {
        this._spinner.hide();

      }
    )
    
  }

  nextPage(){
    this._spinner.show();
    this._salidaService.getNextPage(this.token, this.next_page_url ).subscribe(
      response => {
        console.log('si entra')
        if(response.status == 'success'){
          this.salidas = response.elementos.data;
          this.total = response.elementos.total;
          this.last_page = response.elementos.last_page;
          this.current_page = response.elementos.current_page;
          this.next_page_url = response.elementos.next_page_url;
          this.prev_page_url = response.elementos.prev_page_url;
          window.scrollTo(0,0);
          this._spinner.hide();

        }else{
          console.log('entra y se regresa')
          this._spinner.hide();

        }

      },
      error => {
        console.log('no entra')
        console.log(<any>error)
        this._spinner.hide();

      }

    );
  }

  previousPage(){
    this._spinner.show();
    this._salidaService.getNextPage(this.token, this.prev_page_url ).subscribe(
      response => {
        console.log('si entra')
        if(response.status == 'success'){
          this.salidas = response.elementos.data;
          this.total = response.elementos.total;
          this.last_page = response.elementos.last_page;
          this.current_page = response.elementos.current_page;
          this.next_page_url = response.elementos.next_page_url;
          this.prev_page_url = response.elementos.prev_page_url;
          window.scrollTo(0,0);
          this._spinner.hide();

        }else{
          console.log('entra y se regresa')
          this._spinner.hide();

        }

      },
      error => {
        console.log('no entra')
        console.log(<any>error)
        this._spinner.hide();

      }

    );
  }

  getAntiguos(){


  }

  getPorMes(){

  }

  getPorStatus(){

  }

}
