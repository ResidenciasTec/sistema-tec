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
  transportes: any;
  public first_name;
  public first_surname;
  public privilegios;


  constructor(
    private _userService: UserService,

  	)
  {
    this.url = global.url;

 
  }

  ngOnInit(){
    console.log('webapp cargada correctamente :) ');

  }

  ngDoCheck(){
    this.identity = JSON.parse(localStorage.getItem('identity'));
    if(this.identity){
         this.first_name = this.identity.name.trim().toUpperCase().charAt(0);
         this.first_surname = this.identity.surname.trim().toUpperCase().charAt(0);
    }
    
    if(localStorage.getItem("privilegios")){
      let privilegio = JSON.parse(localStorage.getItem("privilegios"));
      this.privilegios = privilegio.cargo.cargo;
    }
 
    
  }

  onActivate(e, outlet){
    outlet.scrollTop = 0;
  }





}
