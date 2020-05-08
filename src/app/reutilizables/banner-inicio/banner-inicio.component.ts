import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-banner-inicio',
  templateUrl: './banner-inicio.component.html',
  styleUrls: ['./banner-inicio.component.scss']
})
export class BannerInicioComponent implements OnInit {

  @Input() title: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
