import { Component, OnInit } from '@angular/core';
import { Mantenimiento } from '../../models/mantenimiento';
import { MantenimientoService } from "../../services/mantenimiento.service";
import { lugarService} from "../../services/lugar.service";

@Component({
  selector: 'app-crear-mantenimiento',
  templateUrl: './crear-mantenimiento.component.html',
  styleUrls: ['./crear-mantenimiento.component.scss'],
  providers: [MantenimientoService, lugarService]
})
export class CrearMantenimientoComponent implements OnInit {
	public mantenimiento: Mantenimiento;
  public token;
  public identity;
  public status;
  public lugares;
  public textoCrear: String;

  constructor(
  	private _mantenimientoService: MantenimientoService,
    private _lugarService: lugarService,
  	) 
  {
  	this.mantenimiento = new Mantenimiento(1, 1 , 1 ,'','','','','','',''); 
    this.token = localStorage.getItem('token');
    this.identity = localStorage.getItem('identity');
    this.textoCrear = "Crear una solicitud de mantenimiento";
  }

  ngOnInit(): void {
    window.scrollTo(0,0);
    this.getLugares();
  }

  getLugares(){
    this._lugarService.getLugares().subscribe(
      response => {
        if(response.status == 'success'){
          this.lugares = response.lugares;
          

        }else{
          
        }

      },
      error => {
        console.log(<any>error);
       

      }
      );

  }

  onSubmit(){
    this._mantenimientoService.createMantenimiento(this.token, this.mantenimiento).subscribe(
      response => {
        if(response && response.status == 'success'){
          this.status = 'success';
        }else{
          this.status = 'error';
        }

      },
      error => {
        console.log(<any>error);
        this.status = 'error';
      }
      );

  }

}
