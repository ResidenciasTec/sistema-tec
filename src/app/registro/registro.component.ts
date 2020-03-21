import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import {UserService} from "../services/user.service";
import {departamentoService} from "../services/departamento.service";

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
  providers: [UserService, departamentoService]
})
export class RegistroComponent implements OnInit {
  public title:string;
  public user:User;
  public status: string;
  public departamentos: string;

  constructor(
  	private _userService: UserService,
    private _departamentoService: departamentoService,
  	) { 
    this.title = "Crea una cuenta";
    this.user = new User(1,'','','','','','','','','','');

  }

  ngOnInit(): void {

  	console.log("'componente de registro correcto...");
  	console.log(this._userService.test());

    this.getDepartamentos();
  }

  getDepartamentos(){
    
    this._departamentoService.getDepartamentos().subscribe(
      response =>{
        if(response.status == 'success'){
          this.departamentos = response.departamentos;
        }

      },
      error =>{
        console.log(error);

      });

  }

  onSubmit(form){
  console.log(this.user);
  this._userService.register(this.user).subscribe(
	  	response =>{
	  		if(response.status =="success"){
	  			this.status = 'success';
	  			form.reset();
	  			console.log(response);

	  		}else{
	  			this.status = 'error';

	  		} 
	  		
	  	},
	  	error =>{
	  		this.status = 'error';
	  		console.log(<any>error);

	  	}
  	);


  }

}
