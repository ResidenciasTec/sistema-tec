import { Component, OnInit, ɵConsole } from '@angular/core';
import {ToastrService} from "ngx-toastr";
import { NgxSpinnerService } from "ngx-spinner";
import {variableService} from "../../services/variables.service";
import {EventoService} from "../../services/evento.service";
import {MantenimientoService} from "../../services/mantenimiento.service";
import {SalidaService} from "../../services/salida.service";
import * as moment from 'moment';


@Component({
  selector: 'app-clndrio',
  templateUrl: './clndrio.component.html',
  styleUrls: ['./clndrio.component.scss'],
  providers: [variableService, EventoService, MantenimientoService, SalidaService]
})
export class ClndrioComponent implements OnInit {

  textoCrear: String;
  daysOfWeek: any[];
  daysMonth: any[];
  mesActual: String;
  anioActual: String;
  fechaDinamica: string;
  token;
  eventos: any;
  mantenimientos: any;
  salidas: any;
  eventosDay: any;
  mantenimientosDay: any;
  salidasDay: any;
  eventoResult: any;
  mantenimientoResult: any;
  salidaResult: any;
  eventoNumbers: any[];
  salidaNumbers: any[];
  mantenimientoNumbers: any[];
  number: Boolean;


  constructor(
    private _toastr: ToastrService,
    private _spinner: NgxSpinnerService,
    private _variableService: variableService,
    private _eventoService: EventoService,
    private _mantenimientoService: MantenimientoService,
    private _salidaService: SalidaService,
  ) { 
    this.textoCrear = "Calendario de actividades";
    this.daysOfWeek = ['Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab', 'Dom'];
    this.daysMonth = [];
    this.mesActual = moment().format('MMMM YYYY');
    this.fechaDinamica = moment().format('YYYY-MM-DD');
    this.token = this._variableService.getToken();
    this.eventoNumbers = [];
    this.mantenimientoNumbers = [];
    this.salidaNumbers = [];
    this.number = false;

  }

  ngOnInit(): void {
    window.scrollTo(0,0);
    const startOfMonth = moment().startOf('month').format('YYYY-MM-DD');
    const endOfMonth = moment().endOf('month').format('YYYY-MM-DD');
    let weekDay = moment().startOf('month').weekday();


    this.dayMonth(startOfMonth, endOfMonth, weekDay);
    this.EventoEveryMes(startOfMonth, endOfMonth);
    this.MantenimientoEveryMes(startOfMonth, endOfMonth);
    this.SalidaEveryMes(startOfMonth, endOfMonth);
  }

  dayMonth(start, end, week){
    this.daysMonth = [];
    let first = start.substring(start.length-2);
    let last = end.substring(end.length-2);
    console.log(week);

      for(let i = 1; i <= week; i++){
        this.daysMonth.push(' ');
      }

      let day = 1;
      for(day; day <= last; day++){
        this.daysMonth.push(day);
      }

  }

  prevMonth(){
    this.daysMonth = [];
    let trash = moment(this.fechaDinamica).subtract(1, 'months').format('YYYY-MM-DD');
    this.mesActual = moment(this.fechaDinamica).subtract(1, 'months').format('MMMM YYYY');
    this.fechaDinamica = trash;
  

    const startOfMonth = moment(trash).startOf('month').format('YYYY-MM-DD');
    const endOfMonth   = moment(trash).endOf('month').format('YYYY-MM-DD');
    let weekDay = moment(trash).startOf('month').weekday();


    this.dayMonth(startOfMonth, endOfMonth, weekDay);
    this.EventoEveryMes(startOfMonth, endOfMonth);
    this.MantenimientoEveryMes(startOfMonth, endOfMonth);
    this.SalidaEveryMes(startOfMonth, endOfMonth);
    console.log(startOfMonth + endOfMonth + "probando");
  }

  nextMonth(){
    this.daysMonth = [];
    let trash = moment(this.fechaDinamica).add(1, 'months').format('YYYY-MM-DD');
    this.mesActual = moment(this.fechaDinamica).add(1, 'months').format('MMMM YYYY');
    this.fechaDinamica = trash;


    const startOfMonth = moment(trash).startOf('month').format('YYYY-MM-DD');
    const endOfMonth = moment(trash).endOf('month').format('YYYY-MM-DD');
    let weekDay = moment(trash).startOf('month').weekday();

    this.dayMonth(startOfMonth, endOfMonth, weekDay);
    this.EventoEveryMes(startOfMonth, endOfMonth);
    this.MantenimientoEveryMes(startOfMonth, endOfMonth);
    this.SalidaEveryMes(startOfMonth, endOfMonth);
    console.log(startOfMonth + endOfMonth + "probando");
  }

  EventoMonth(){
    this._spinner.show();
    this._eventoService.getPorMes(this.token).subscribe(
      response => {
        if(response.status == "success"){
          this.eventos = response.elementos.data;
          this._spinner.hide();
          console.log(this.eventos);
          this.ArrayDays('evento');
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

  EventoEveryMes(inicio, final){
    this._spinner.show();
    this._eventoService.everyMonth(this.token, inicio, final).subscribe(
      response => {
        if(response.status == 'success'){
          this.eventos = response.elementos.data;
          this.eventoNumbers = [];
          this.ArrayDays('evento');
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

  MantenimientoMonth(){
    this._spinner.show();
    this._mantenimientoService.getPorMes(this.token).subscribe(
      response => {
        if(response.status == "success"){
          this.mantenimientos = response.elementos.data;
          this._spinner.hide();
          console.log(this.mantenimientos);
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

  MantenimientoEveryMes(inicio, final){
    this._spinner.show();
    this._mantenimientoService.everyMonth(this.token, inicio, final).subscribe(
      response => {
        if(response.status == 'success'){
          this.mantenimientos = response.elementos.data;
          this.mantenimientoNumbers = [];
          this.ArrayDays('mantenimiento');
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

  SalidaEveryMes(inicio, final){
    this._spinner.show();
    this._salidaService.everyMonth(this.token, inicio, final).subscribe(
      response => {
        if(response.status == 'success'){
          this.salidas = response.elementos.data;
          this.salidaNumbers = [];
          this.ArrayDays('salida');
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

  SalidaMonth(){
    this._spinner.show();
    this._salidaService.getPorMes(this.token).subscribe(
      response => {
        if(response.status == "success"){
          this.salidas = response.elementos.data;
          this._spinner.hide();
          console.log(this.salidas);
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

  EventoPorDia(day){
    const result = this.eventos.filter(data => data.fecha.substring(data.fecha.length-2) == day );
    console.log(result);
    this.eventoResult = result;
  }

  MantenimientoPorDia(day){
    const result = this.mantenimientos.filter(data => data.fecha.substring(data.fecha.length-2) == day );
    console.log(result);
    this.mantenimientoResult = result;
  }

  SalidaPorDia(day){
    const result = this.salidas.filter(data => data.fecha.substring(data.fecha.length-2) == day );
    console.log(result);
    this.salidaResult = result;
  }

  dayClick(day){
    this.EventoPorDia(day);
    this.MantenimientoPorDia(day);
    this.SalidaPorDia(day);

    if(!isNaN(day)){
      this.number = false;
      this.eventosDay = this.eventoResult;
      this.mantenimientosDay = this.mantenimientoResult;
      this.salidasDay = this.salidaResult;

      window.scroll({
        top : 900,
        left : 0,
        behavior : 'smooth'
    });
    }else{
      this.number = true;

    }

    console.log('se ha ejecutado');
    console.log(this.eventosDay);

  }

  ArrayDays(type){



    switch(type){
      case'evento':
      for (let data in this.eventos) {
        console.log("la lista de numeros")
        let numbers = this.eventos[data].fecha.substring(this.eventos[data].fecha.length-2);
        this.eventoNumbers.push(numbers);
        console.log(this.eventoNumbers);
        }
       break;

      case 'mantenimiento':
        for (let data in this.mantenimientos) {
          console.log("la lista de numeros")
          let numbers = this.mantenimientos[data].fecha.substring(this.mantenimientos[data].fecha.length-2);
          this.mantenimientoNumbers.push(numbers);
          console.log(this.eventoNumbers);
          }
        break;

      case 'salida':
        for (let data in this.salidas) {
          console.log("la lista de numeros")
          let numbers = this.salidas[data].fecha.substring(this.salidas[data].fecha.length-2);
          this.salidaNumbers.push(numbers);
          console.log(this.eventoNumbers);
          }
        break;

        default:
          break;
    }

  }

  evaluateDay(day, type){

    switch(type){
      case 'evento':
        return this.eventoNumbers.find(e => e == day);
      break;
      case 'mantenimiento':
        return this.mantenimientoNumbers.find(e => e == day);
        break;
      case 'salida':
        return this.salidaNumbers.find(e => e == day);
        break;
      default:
        break;
    }
 
       
    
  }

  evaluateEventoDay(day){
    return this.eventoNumbers.find(e => e == day);
  }

  evaluateMantenimientoDay(day){
    return this.mantenimientoNumbers.find(e => e == day);
  }

  evaluateSalidaDay(day){
    return this.salidaNumbers.find(e => e == day);
  }

}
