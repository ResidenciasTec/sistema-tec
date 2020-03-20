import { Component, OnInit } from '@angular/core';
import { MantenimientoService } from "../../services/mantenimiento.service";

@Component({
  selector: 'app-ver-mantenimiento',
  templateUrl: './ver-mantenimiento.component.html',
  styleUrls: ['./ver-mantenimiento.component.scss'],
  providers: [MantenimientoService]
})
export class VerMantenimientoComponent implements OnInit {

  constructor(
  	private _mantenimientoService: MantenimientoService,
  	) { }

  ngOnInit(): void {
  }

}
