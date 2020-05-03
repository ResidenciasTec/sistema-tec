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
  public url;
  public submenu_user: boolean;
  public submenu_panel: boolean;
  public submenu_crear: boolean;
  transportes: any;
  public first_name;
  public first_surname;
  public hamburguer;
  public subhamburguer;


  constructor(
    private _userService: UserService,

  	)
  {
    this.url = global.url;
    this.submenu_user = false;
    this.submenu_crear = false;
    this.submenu_panel = false;
    this.hamburguer = false;
    this.subhamburguer = false;

 
  }

  ngOnInit(){
    console.log('webapp cargada correctamente :) ');

  }

  ngDoCheck(){
    this.submenu_user;
    this.submenu_crear;
    this.submenu_panel;
    this.identity = JSON.parse(localStorage.getItem('identity'));
    if(this.identity){
         this.first_name = this.identity.name.trim().toUpperCase().charAt(0);
         this.first_surname = this.identity.surname.trim().toUpperCase().charAt(0);
    }
 
    
  }

  onActivate(e, outlet){
    outlet.scrollTop = 0;
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

  hamburguerOpen(){
    window.scrollTo(0,0);
    if(this.hamburguer){
      this.hamburguer = false;
      console.log(this.hamburguer);
    }else{
      this.hamburguer = true;
      console.log(this.hamburguer);
    }
    
  }



}
