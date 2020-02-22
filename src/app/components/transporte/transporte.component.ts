import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transporte',
  templateUrl: './transporte.component.html',
  styleUrls: ['./transporte.component.scss']
})
export class TransporteComponent implements OnInit {
  public title:string;

  constructor() { 
    this.title = "pagina de transporte";
  }

  ngOnInit(): void {
  }

}
