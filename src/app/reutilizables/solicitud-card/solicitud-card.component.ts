import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-solicitud-card',
  templateUrl: './solicitud-card.component.html',
  styleUrls: ['./solicitud-card.component.scss']
})
export class SolicitudCardComponent implements OnInit {

  @Input() title: any;
  @Input() description: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
