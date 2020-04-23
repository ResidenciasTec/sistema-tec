import { Component, OnInit } from '@angular/core';
import {variableService} from "../../services/variables.service"
import {MantenimientoService} from "../../services/mantenimiento.service"
import { NgxSpinnerService } from "ngx-spinner";



@Component({
  selector: 'app-mantenimiento',
  templateUrl: './mantenimiento.component.html',
  styleUrls: ['./mantenimiento.component.scss'],
  providers: [MantenimientoService, variableService]
})
export class MantenimientoComponent implements OnInit {
  public title:string;
  public textoCrear: string;
  public token;
  public mantenimientos;
  public total;
  public last_page;
  public current_page;
  public next_page_url;
  public prev_page_url;


  constructor(
    private _mantenimientoService: MantenimientoService,
    private _spinner: NgxSpinnerService,
    private _variableService: variableService,
  	

  	) { 
      this.title = "pagina de mantenimiento";
      this.textoCrear = "Solicitudes de mantenimientos"
      this.token = this._variableService.getToken();
  }

  ngOnInit(): void {
    window.scrollTo(0,0);
    this.getMantenimientos();
  

  }

  getMantenimientos(){
    this._spinner.show();
    this._mantenimientoService.getMantenimientos(this.token).subscribe(
      response => {
        if(response.status == 'success'){
          this.mantenimientos = response.elementos.data;
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
    this._mantenimientoService.getNextPage(this.token, this.next_page_url ).subscribe(
      response => {
        console.log('si entra')
        if(response.status == 'success'){
          this.mantenimientos = response.elementos.data;
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
    this._mantenimientoService.getNextPage(this.token, this.prev_page_url ).subscribe(
      response => {
        console.log('si entra')
        if(response.status == 'success'){
          this.mantenimientos = response.elementos.data;
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
