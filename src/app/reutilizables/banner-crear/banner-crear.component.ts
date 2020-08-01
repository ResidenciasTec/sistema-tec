import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-banner-crear',
  templateUrl: './banner-crear.component.html',
  styleUrls: ['./banner-crear.component.scss']
})
export class BannerCrearComponent implements OnInit {

  @Input() titulo: String;

  constructor() { }

  ngOnInit(): void {
  }

}
