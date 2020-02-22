import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
  public title:string;

  constructor() { 
    this.title = "pagina de registro";
  }

  ngOnInit(): void {
  }

}
