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
  
  constructor() { }

  ngOnInit(): void {
  }

}
