import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-grid',
  templateUrl: './card-grid.component.html',
  styleUrls: ['./card-grid.component.scss']
})
export class CardGridComponent implements OnInit {

  @Input() eventos: any;
  @Input() mantenimientos: any;
  @Input() salidas: any;
  @Input() vehiculos: any;
  @Input() departamentos: any;
  @Input() cargos: any;
  @Input() permisos: any;
  @Input() espacios: any;
  @Input() ubicaciones: any;
  @Input() statusvehiculos: any;
  @Input() statusorders: any;
  @Input() subdirecciones: any;
  message: String;
  
  constructor() {
    this.message = 'no hay datos para mostrar.'
   }

  ngOnInit(): void {
  }

}
