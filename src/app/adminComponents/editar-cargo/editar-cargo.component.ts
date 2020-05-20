import { Component, OnInit } from '@angular/core';
import {CargoService} from "../../services/cargo.service";
import {variableService} from "../../services/variables.service"
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute, Params } from "@angular/router";
import {ToastrService} from "ngx-toastr";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-editar-cargo',
  templateUrl: './editar-cargo.component.html',
  styleUrls: ['./editar-cargo.component.scss'],
  providers: [CargoService, variableService]
})
export class EditarCargoComponent implements OnInit {

  form: FormGroup;
  token: any;
  textoCrear: string;
  id: number;
  cargo: any;
  cargos: any;

  constructor(
    private _cargoService: CargoService,
    private _variableService: variableService,
    private _formBuilder: FormBuilder,
    private _toastr: ToastrService,
    private _router: Router,
    private _route: ActivatedRoute,
    private _spinner: NgxSpinnerService,
  ) 
  {      
    this.token = this._variableService.getToken();
    this.textoCrear = "editar un cargo nuevo!"; 
    this.cargos = JSON.parse(localStorage.getItem('cargos'));
  }

  ngOnInit(): void {
    window.scrollTo(0,0);
    this.getCargo();
    this.crearForm();
  }

  private crearForm() {

		this.form = this._formBuilder.group({
      cargo: new FormControl(this.cargo.cargo, { validators: [Validators.required], updateOn: 'change' }),
		});

  } 

  getCargo(){

    this._route.params.subscribe(params => {

      this.id = +params['id'];

        this.cargo = this.cargos.find(element => element.id == this.id);
      });
  }

  onSubmit(form){
    this._spinner.show();
    this._cargoService.updateCargo(this.token, form, this.cargo.id).subscribe(
      response => {
        if(response.status == 'success'){
          this._toastr.success('el cargo se ha actualizado con exito', 'LISTO');
          window.scrollTo(0,0);
          this._spinner.hide();

          //redireccion a inicio
          this._router.navigate(['cargos']);
    

        }else{
          this._spinner.hide();
          this._toastr.error('parece que ha habido algun error','OOPS');

        }
      },
      error => {
        this._spinner.hide();
        this._toastr.error('parece que los datos han sido erroneos','OOPS');
        console.log(<any>error);

      }
    );

  }


}







  


 


