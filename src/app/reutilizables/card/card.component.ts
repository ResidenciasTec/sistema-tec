import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() evento: any;
  @Input() mantenimiento: any;
  @Input() salida: any;
  @Input() vehiculo: any;
  @Input() departamento: any;
  @Input() cargo: any;
  @Input() permiso: any;
  @Input() subdireccion: any;
  @Input() statusvehiculo: any;
  @Input() statusorder: any;
  @Input() espacio: any;
  @Input() ubicacion: any;

  constructor() { }

  ngOnInit(): void {
  }

}
