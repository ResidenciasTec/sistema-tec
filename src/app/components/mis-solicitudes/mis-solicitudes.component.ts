import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mis-solicitudes',
  templateUrl: './mis-solicitudes.component.html',
  styleUrls: ['./mis-solicitudes.component.scss']
})
export class MisSolicitudesComponent implements OnInit {
public titulo: String;
  constructor() { 
    this.titulo = "Mis solicitudes"
  }

  ngOnInit(): void {
  }

}
