import { Component, OnInit } from '@angular/core';
import {PermisoService} from "../../services/permiso.service";
import {variableService} from "../../services/variables.service"
import {UserService} from "../../services/user.service"
import { Router, ActivatedRoute, Params } from "@angular/router";
import {ToastrService} from "ngx-toastr";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-permisos',
  templateUrl: './permisos.component.html',
  styleUrls: ['./permisos.component.scss'],
  providers: [PermisoService, variableService, UserService]
})
export class PermisosComponent implements OnInit {

  textoCrear: String;
  token;
  permisos;
  users: any;
  total: any;
  last_page: any;
  next_page_url: any;
  current_page: any;
  prev_page_url: any;

  constructor(    
    private _permisoService: PermisoService,
    private _variableService: variableService, 
    private _userService: UserService,   
    private _toastr: ToastrService,
    private _router: Router,
    private _route: ActivatedRoute,
    private _spinner: NgxSpinnerService,
    )
    {
      this.textoCrear = "permisos de usuarios"
      this.token = this._variableService.getToken();
     }

  ngOnInit(): void {
    window.scrollTo(0,0);
    this.getUsers();
    this.getPermisos();
  }

   
  getPermisos(){
    this._spinner.show();
    this._permisoService.getPermisos(this.token).subscribe(
      response => {
        if(response.status == 'success'){

          console.log('ha entrado al sucess');
          this.permisos = response.elementos.data;
          this.total = response.elementos.total;
          this.last_page = response.elementos.last_page;
          this.current_page = response.elementos.current_page;
          this.next_page_url = response.elementos.next_page_url;
          this.prev_page_url = response.elementos.prev_page_url;
          localStorage.setItem('permisos', JSON.stringify(this.permisos));
          this._spinner.hide();

        }else{
          this._spinner.hide();
          console.log('errores');

        }

      },
      error => {
        this._spinner.hide();
        console.log(<any>error);

      }
    )
  }
  
  previousPage(){
    this._spinner.show();
    this._variableService.getNextPage(this.token, this.prev_page_url ).subscribe(
      response => {
        console.log('si entra')
        if(response.status == 'success'){
          this.permisos = response.elementos.data;
          this.total = response.elementos.total;
          this.last_page = response.elementos.last_page;
          this.current_page = response.elementos.current_page;
          this.next_page_url = response.elementos.next_page_url;
          this.prev_page_url = response.elementos.prev_page_url;
          window.scrollTo(0,0);
          this._spinner.hide();

        }else{
          console.log('entra y se regresa')
          this._spinner.hide();

        }

      },
      error => {
        console.log('no entra')
        console.log(<any>error)
        this._spinner.hide();

      }

    );
  }

  nextPage(){
    this._spinner.show();
    this._variableService.getNextPage(this.token, this.prev_page_url ).subscribe(
      response => {
        console.log('si entra')
        if(response.status == 'success'){
          this.permisos = response.elementos.data;
          this.total = response.elementos.total;
          this.last_page = response.elementos.last_page;
          this.current_page = response.elementos.current_page;
          this.next_page_url = response.elementos.next_page_url;
          this.prev_page_url = response.elementos.prev_page_url;
          window.scrollTo(0,0);
          this._spinner.hide();

        }else{
          console.log('entra y se regresa')
          this._spinner.hide();

        }

      },
      error => {
        console.log('no entra')
        console.log(<any>error)
        this._spinner.hide();

      }

    );
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


}










