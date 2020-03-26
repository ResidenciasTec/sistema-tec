import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl } from "@angular/forms";
import { Salida } from '../../models/salida';
import { SalidaService } from "../../services/salida.service";
import { UserService } from "../../services/user.service";
import { TransporteService } from "../../services/transporte.service";

@Component({
  selector: 'app-crear-salida',
  templateUrl: './crear-salida.component.html',
  styleUrls: ['./crear-salida.component.scss'],
  providers: [SalidaService, UserService, TransporteService]
})
export class CrearSalidaComponent implements OnInit {
	public salida: Salida;
  public salidaForm: FormGroup;
  public identity;
  public transportes;


  constructor(
  	  	private _salidaService: SalidaService, 
        private _userService: UserService,
        private _transporteService: TransporteService,
        
  	) 
  {
  	this.identity = _userService.getIdentity();
  }

  ngOnInit(): void {
    this.getTransportes();

    this.salidaForm = new FormGroup({

      vehiculo_id: new FormControl(null, Validators.required),
      titulo: new FormControl(null),
      contenido: new FormControl(null),
      fecha: new FormControl(null),
      hora_inicio: new FormControl(null),
      hora_final: new FormControl(null)

    });

    this.salidaForm.valueChanges.subscribe(
      value => console.log(value)
      );

    this.salidaForm.statusChanges.subscribe(
      value => console.log(value)
      );
  }

  onSubmit(){
    console.log("submit", this.salidaForm);
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

  get getTitulo(){
    return this.salidaForm.get('titulo');
  }

  minPrice(minPrice: number): ValidatorFn {
    return(control: AbstractControl): {[key: string]: any} | null => {
      if(control.value !== undefined && control.value <= minPrice){
        return {
          'minPrice': true
        }
      }else{
        return null;
      }
    }

  }

}
