import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  public title:string;

  constructor() {
    this.title = "Sistema de control de inventarios del Instituto Tecnologico de Matamoros";
   }

  ngOnInit(): void {
  }

}
