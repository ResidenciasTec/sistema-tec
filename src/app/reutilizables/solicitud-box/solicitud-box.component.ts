import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-solicitud-box',
  templateUrl: './solicitud-box.component.html',
  styleUrls: ['./solicitud-box.component.scss']
})
export class SolicitudBoxComponent implements OnInit {

  @Input() evento: any;
  @Input() mantenimiento: any;
  @Input() salida: any;
  @Input() fecha: any;
  @Input() vehiculo: any;
  @Input() departamento: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
