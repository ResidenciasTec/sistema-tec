import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-solicitud-botones',
  templateUrl: './solicitud-botones.component.html',
  styleUrls: ['./solicitud-botones.component.scss']
})
export class SolicitudBotonesComponent implements OnInit {

  @Input() evento: any;
  @Input() mantenimiento: any;
  @Input() salida: any;
  @Input() vehiculo: any;
  @Input() departamento: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
