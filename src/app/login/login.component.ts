import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router";
import {User} from "../models/user";
import { UserService} from "../services/user.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [UserService]
})

export class LoginComponent implements OnInit {
  public title: string;
  public status: string;
  public user: User;
  public token;
  public identity;

  constructor(
  	private _userService: UserService,
  	private _router: Router,
  	private _route: ActivatedRoute,
   	) 
  { 
    this.title = "pagina de login";
    this.user = new User(1,'','','','usuario','','','','','','','');
  }

  ngOnInit(): void {
  	//se ejecuta siempre y cierra sesion solo cuando le llega el parametro sure por url
  	this.logout();
  }

  onSubmit(form){
  	this._userService.signup(this.user).subscribe(
	  		response => {
	  			//token
	  			if(response.status != 'error'){
	  				this.status = 'success';
	  				this.token = response;

	  				//OBJETO DE USUARIO IDENTIFICADO

	  				this._userService.signup(this.user, true).subscribe(
	  					response =>{
	  						this.identity = response;
	  						console.log(this.token);
	  						console.log(this.identity);

	  						//persistir al usuario identificado
	  						localStorage.setItem('token', this.token);
	  						localStorage.setItem('identity', JSON.stringify(this.identity));

	  						//redirigir al inicio
	  						this._router.navigate(['inicio']);
	  					},
	  					error =>{
	  						this.status = 'error';
	  						console.log(<any>error);
	  					}
	  					
	  					);
	  			}else{
	  				this.status = 'error';
	  			}

	  		},
	  		error => {
	  			this.status = 'error';
	  			console.log(<any>error);
	  	}
  	);

  }

  logout(){
  	this._route.params.subscribe(params =>{
  		let logout = +params['sure'];

  		if(logout == 1){
  			localStorage.removeItem('identity');
  			localStorage.removeItem('token');

  			this.token = null;
  			this.identity = null;

  			//redireccion a inicio
  			this._router.navigate(['inicio']);
  		}
  	});
  }

}
