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

  constructor() { }

  ngOnInit(): void {
  }

}
