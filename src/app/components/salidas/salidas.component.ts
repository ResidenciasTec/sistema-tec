import { Component, OnInit } from '@angular/core';
import { SalidaService } from "../../services/salida.service";


@Component({
  selector: 'app-salidas',
  templateUrl: './salidas.component.html',
  styleUrls: ['./salidas.component.scss'],
  providers: [SalidaService]
})
export class SalidasComponent implements OnInit {

  constructor(
  	private _salidaService: SalidaService,
  	) { }

  ngOnInit(): void {
  }

}
