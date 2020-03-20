import { Component, OnInit } from '@angular/core';
import { MantenimientoService } from "../../services/mantenimiento.service";

@Component({
  selector: 'app-mantenimiento',
  templateUrl: './mantenimiento.component.html',
  styleUrls: ['./mantenimiento.component.scss'],
  providers: [MantenimientoService]
})
export class MantenimientoComponent implements OnInit {
  public title:string;

  constructor(
  	private _mantenimientoService: MantenimientoService,
  	) { 
    this.title = "pagina de mantenimiento";
  }

  ngOnInit(): void {
  }

}
