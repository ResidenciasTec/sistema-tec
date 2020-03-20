import { Component, OnInit } from '@angular/core';
import { SalidaService } from "../../services/salida.service";


@Component({
  selector: 'app-ver-salida',
  templateUrl: './ver-salida.component.html',
  styleUrls: ['./ver-salida.component.scss'],
  providers: [SalidaService]
})
export class VerSalidaComponent implements OnInit {

  constructor(
  	private _salidaService: SalidaService,
  	) { }

  ngOnInit(): void {
  }

}
