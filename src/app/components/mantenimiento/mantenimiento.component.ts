import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mantenimiento',
  templateUrl: './mantenimiento.component.html',
  styleUrls: ['./mantenimiento.component.scss']
})
export class MantenimientoComponent implements OnInit {
  public title:string;

  constructor() { 
    this.title = "pagina de mantenimiento";
  }

  ngOnInit(): void {
  }

}
