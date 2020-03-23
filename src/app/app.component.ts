import { Component, OnInit, DoCheck } from '@angular/core';
import { UserService } from "./services/user.service";
import {global} from "./services/global";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [UserService]
})
export class AppComponent implements OnInit, DoCheck {
  public title = 'tec-materiales';
  public identity;
  public token;
  public url;
  public submenu_user: boolean;
  public submenu_panel: boolean;
  public submenu_crear: boolean;

  constructor(
  	public _userService: UserService,

  	)
  {
  	this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.url = global.url;
    this.submenu_user = false;
  }

  ngOnInit(){
    console.log('webapp cargada correctamente :) ');

  }

  ngDoCheck(){
    this.loadUser();
    this.submenu_user;
    this.submenu_crear;
    this.submenu_panel;
  }

  loadUser(){
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();

  }

  showMenuUser(){
    
    if(this.submenu_user == true){
      this.submenu_user = false;
    }else{
      this.submenu_user = true;
    }
  }

    showMenuPanel(){
    
    if(this.submenu_panel == true){
      this.submenu_panel = false;
    }else{
      this.submenu_panel = true;
    }
  }

    showMenuCrear(){
    
    if(this.submenu_crear == true){
      this.submenu_crear = false;
    }else{
      this.submenu_crear = true;
    }
  }



}
