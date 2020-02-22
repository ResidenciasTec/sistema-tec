import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {

  public title: string;

  constructor() {
    this.title = "pagina de error";
   }

  ngOnInit(): void {
  }

}
