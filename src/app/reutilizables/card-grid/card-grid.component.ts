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
  
  constructor() { }

  ngOnInit(): void {
  }

}
