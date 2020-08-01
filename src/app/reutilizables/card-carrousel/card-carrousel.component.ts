import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-carrousel',
  templateUrl: './card-carrousel.component.html',
  styleUrls: ['./card-carrousel.component.scss']
})
export class CardCarrouselComponent implements OnInit {

  @Input() eventos: any;
  @Input() mantenimientos: any;
  @Input() salidas: any;
  @Input() vehiculos: any;
  @Input() departamentos: any;
  message: string;
  
  constructor() {
    this.message = 'no hay datos para mostrar.'
   }

  ngOnInit(): void {
  }

}
