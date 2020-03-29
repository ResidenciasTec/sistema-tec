import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl } from "@angular/forms";
import { Salida } from '../../models/salida';
import { SalidaService } from "../../services/salida.service";
import { TransporteService } from "../../services/transporte.service";


@Component({
  selector: 'app-crear-salida',
  templateUrl: './crear-salida.component.html',
  styleUrls: ['./crear-salida.component.scss'],
  providers: [SalidaService, TransporteService]
})
export class CrearSalidaComponent implements OnInit {
	public salida: Salida;
  public salidaForm: FormGroup;
  public identity;
  public token;
  public transportes;
  public status;
  public textoCrear;


  constructor(
  	  	private _salidaService: SalidaService, 
        private _transporteService: TransporteService,
        
  	) 
  {
    this.salida = new Salida(1, 1 , 1 ,'','','','','','','');
  	this.identity = localStorage.getItem('identity');
    this.token = localStorage.getItem('token');
    this.textoCrear = "Crear una solicitud de salida";
  }

  ngOnInit(): void {
    this.getTransportes();

  }

  onSubmit(){

    this._salidaService.createSalida(this.token, this.salida).subscribe(
      response => {
      console.log("el servicio se ha ejecutado");
      if(response && response.status == 'success'){
        this.status = 'success';
      }else{
        this.status = 'error';
      }
        

      },
      error=>{
        this.status = 'error';
        console.log(<any>error);
      }
      );
  }

  getTransportes(){
    
    this._transporteService.getTransportes().subscribe(
      response =>{
        if(response.status == 'success'){
          this.transportes = response.vehiculos;
        }

      },
      error =>{
        console.log(error);

      });

  }
 


}
