import { Component, OnInit } from '@angular/core';
import {global} from "../../services/global";

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {
 public title: string;
 public identity;
 public url;
 public logueado;

  constructor() 
  { 
    this.title = "perfil de usuario";
    this.url = global.url;
    
  }

  ngOnInit(): void {
    this.identity = JSON.parse(localStorage.getItem("identity"));
    this.logueado = JSON.parse(localStorage.getItem('logueado'));
  }

}
