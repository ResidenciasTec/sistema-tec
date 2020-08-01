import { Component, OnInit } from '@angular/core';
import {PermisoService} from "../../services/permiso.service"
import {variableService} from "../../services/variables.service"
import {UserService} from "../../services/user.service"
import { Router, ActivatedRoute, Params } from "@angular/router";
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import {ToastrService} from "ngx-toastr";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-crear-permisos',
  templateUrl: './crear-permisos.component.html',
  styleUrls: ['./crear-permisos.component.scss'],
  providers: [variableService, UserService, PermisoService]
})
export class CrearPermisosComponent implements OnInit {

  token: any;
  textoCrear: string;
  id: number;
  departamentos: any;
  cargos: any;
  form: FormGroup;
  users: any;
  formUser: FormGroup;
  cargoUpdate: any;
  json: {};
  userUpdate: any;

  constructor(    
    private _formBuilder: FormBuilder,
    private _spinner: NgxSpinnerService,
    private _toastr: ToastrService,
    private _permisoService: PermisoService,
    private _variableService: variableService,
    private _userService: UserService,
    private _router: Router,
    private _route: ActivatedRoute,
    ) 
    {
      this.token = this._variableService.getToken();
      this.cargos = JSON.parse(localStorage.getItem('cargos'));
      this.textoCrear = "crear permiso nuevo";
      this.departamentos = JSON.parse(localStorage.getItem('departamentos'));
     }

  ngOnInit(): void {
    window.scrollTo(0,0);
    this.getUsers();
    this.editarForm();
  }


  private editarForm() {

		this.form = this._formBuilder.group({
      usuario_id: new FormControl('', { validators: [Validators.required], updateOn: 'change' }),
      departamento_id: new FormControl('', { validators: [Validators.required], updateOn: 'change' }),
      cargo_id: new FormControl('', { validators: [Validators.required], updateOn: 'change' }),
    });
  

  } 

  getUsers(){
    this._spinner.show();
    this._userService.getUsers(this.token).subscribe(
      response => {
        if(response.status == 'success'){
          this.users = response.usuarios;
          localStorage.setItem('users', JSON.stringify(this.users));
          this._spinner.hide();
        }else{
          this._spinner.hide();
        }

      },
      error => {
        this._spinner.hide();
        console.log(<any>error);

      }
    )

  }


  onSubmit(form){
    this._spinner.show();
    this.cargoUpdate = this.cargos.find(element => element.id == this.form.value.cargo_id);
    this.userUpdate = this.users.find(element => element.id == this.form.value.usuario_id);

    if(this.cargoUpdate){
      this.json = {
        "role": this.cargoUpdate.cargo   
      }
    
      }
         
    if(this.userUpdate){
      console.log(this.userUpdate.id);
      } 
    this._permisoService.createPermiso(this.token, form).subscribe(
      response => {
        if(response.status == 'success'){

          this._userService.update(this.token, this.json, this.userUpdate.id).subscribe(
            response => {
              if(response.status == 'success'){
                this._toastr.success('el permiso se ha asignado correctamente', 'LISTO');
                window.scrollTo(0,0);
                this.form.reset();
                this._spinner.hide();
                console.log('entro correctamente')
                console.log(this.form.value.usuario_id);

              }else{
                console.log('error');
                this._toastr.error('el permiso no se ha asignado correctamente', 'MAL');
                this._spinner.hide();
              }

            },
            error => {
              this._spinner.hide();
              console.log(<any>error);
              this._toastr.error('el permiso no se ha asignado correctamente', 'MAL');

            }
          )

          this._toastr.success('el permiso se ha asignado correctamente', 'LISTO');
          window.scrollTo(0,0);
          this._spinner.hide();
          console.log('el permiso ha pasado el user')


        }else{
          this._spinner.hide();
          this._toastr.error('parece que algo anda mal, intentalo nuevamente', 'UPS');

        }
      },
      error =>{
        this._spinner.hide();
        console.log(<any>error);
        this._toastr.error('parece que los datos ingresados no son correctos', 'UPS');

      }
    )

  }

}








  







