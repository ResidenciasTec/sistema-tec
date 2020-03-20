import { Component, OnInit } from '@angular/core';
import { Mantenimiento } from '../../models/mantenimiento';
import { MantenimientoService } from "../../services/mantenimiento.service";

@Component({
  selector: 'app-actualizar-mantenimiento',
  templateUrl: './actualizar-mantenimiento.component.html',
  styleUrls: ['./actualizar-mantenimiento.component.scss'],
  providers: [MantenimientoService]
})
export class ActualizarMantenimientoComponent implements OnInit {
  public mantenimiento: Mantenimiento;

  constructor(
  	private _mantenimientoService: MantenimientoService,
  	) 
  {
  	this.mantenimiento = new Mantenimiento(1, 1 , 1 ,'','','','','','','');  
  }

  ngOnInit(): void {
  }

}
