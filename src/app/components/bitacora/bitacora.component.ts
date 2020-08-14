import { Component, OnInit } from '@angular/core';
import {variableService} from "../../services/variables.service"
import {SalidaService} from "../../services/salida.service"
import { NgxSpinnerService } from "ngx-spinner";
import * as moment from 'moment';
import { global } from "../../services/global";

@Component({
  selector: 'app-bitacora',
  templateUrl: './bitacora.component.html',
  styleUrls: ['./bitacora.component.scss'],
  providers: [SalidaService, variableService]
})
export class BitacoraComponent implements OnInit {
  salidas: any;
  total: any;
  token: any;
  textoCrear: string;
  next_page_url: any;
  current_page: any;
  last_page: any;
  prev_page_url: any;
  mesActual: string;
  fechaDinamica: string;
  mesAnterior: string;
  mesSiguente: string;
  mesSiguiente: string;
  fechados: moment.Moment;
  fecha: string;
  depto_solicitante: any;
  vehiculos: any;
  global: string;

  constructor(
    private _salidaService: SalidaService,
    private _spinner: NgxSpinnerService,
    private _variableService: variableService,
  ) {
    this.global = global.url;
    this.textoCrear = "Bitacora de vehiculos y salidas"
    this.token = this._variableService.getToken();
    this.mesActual = moment().format('MMMM YYYY');
    this.fechaDinamica = moment().format('YYYY-MM-DD');
    this.mesSiguiente = "Mes siguiente";
    this.mesAnterior = "Mes anterior";
    this.depto_solicitante = JSON.parse(localStorage.getItem('departamentos'));
    this.vehiculos = JSON.parse(localStorage.getItem('vehiculos'));
   }

  ngOnInit(): void {
    window.scrollTo(0,0);
    const startOfMonth = moment().startOf('month').format('YYYY-MM-DD');
    const endOfMonth = moment().endOf('month').format('YYYY-MM-DD');
    this.getPorMes();
  }

  ngDoCheck(){
    


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
          this.next_page_url = this.changeUrlApi(response.elementos.next_page_url);
          this.prev_page_url = this.changeUrlApi(response.elementos.prev_page_url);

          this.salidas.forEach(sal => {

            let fechados = moment(sal.fecha, 'YYYY-MM-DD')
            sal.fecha = moment(fechados).format('DD [de] MMMM [del] YYYY');
            const depto = this.depto_solicitante.find(depto => depto.id === sal.depto_solicitante);

            sal.depto_solicitante = depto.departamento;

            const vehiculo = this.vehiculos.find(veh => veh.id === sal.vehiculo_id);

            sal.vehiculo_id = vehiculo.vehiculo;

          })
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

  SalidaEveryMes(inicio, final){
    this._spinner.show();
    this._salidaService.everyMonth(this.token, inicio, final).subscribe(
      response => {
        if(response.status == 'success'){
          this.salidas = response.elementos.data;

          this.salidas.forEach(sal => {

            let fechados = moment(sal.fecha, 'YYYY-MM-DD')
            sal.fecha = moment(fechados).format('DD [de] MMMM [del] YYYY');
            const depto = this.depto_solicitante.find(depto => depto.id === sal.depto_solicitante);

            sal.depto_solicitante = depto.departamento;

            const vehiculo = this.vehiculos.find(veh => veh.id === sal.vehiculo_id);

            sal.vehiculo_id = vehiculo.vehiculo;
          })

          this._spinner.hide();
        }else{
          this._spinner.hide();
        }

      },
      error => {
        console.log(<any>error);
        this._spinner.hide();

      }
    )
  }

  prevMonth(){
    let trash = moment(this.fechaDinamica).subtract(1, 'months').format('YYYY-MM-DD');
    this.mesActual = moment(this.fechaDinamica).subtract(1, 'months').format('MMMM YYYY');
    this.fechaDinamica = trash;

    const startOfMonth = moment(trash).startOf('month').format('YYYY-MM-DD');
    const endOfMonth   = moment(trash).endOf('month').format('YYYY-MM-DD');

    this.SalidaEveryMes(startOfMonth, endOfMonth);
    console.log(startOfMonth + endOfMonth + "probando");
  }

  nextMonth(){
    let trash = moment(this.fechaDinamica).add(1, 'months').format('YYYY-MM-DD');
    this.mesActual = moment(this.fechaDinamica).add(1, 'months').format('MMMM YYYY');
    this.fechaDinamica = trash;


    const startOfMonth = moment(trash).startOf('month').format('YYYY-MM-DD');
    const endOfMonth = moment(trash).endOf('month').format('YYYY-MM-DD');
    let weekDay = moment(trash).startOf('month').weekday();

    this.SalidaEveryMes(startOfMonth, endOfMonth);
    console.log(startOfMonth + endOfMonth + "probando");
  }

  changeUrlApi(url){

    if(url === null){
      return "";
    }
    const restOfUrl = url.substring(47);

    return `${this.global}${restOfUrl}`
  }



}
