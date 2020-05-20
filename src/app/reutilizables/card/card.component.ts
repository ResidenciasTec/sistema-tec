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

  constructor() { }

  ngOnInit(): void {
  }

}
