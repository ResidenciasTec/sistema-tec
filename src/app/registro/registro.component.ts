import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
  providers: [UserService]
})
export class RegistroComponent implements OnInit {
  public title:string;
  public user:User;
  public status: string;

  constructor(
  	private _userService: UserService
  	) { 
    this.title = "pagina de registro";
    this.user = new User(1,'','','','usuario','','','','','','','');

  }

  ngOnInit(): void {
  	console.log("'componente de registro correcto...");
  	console.log(this._userService.test());
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
