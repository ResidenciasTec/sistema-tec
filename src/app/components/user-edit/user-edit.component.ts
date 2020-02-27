import { Component, OnInit } from '@angular/core';
import {User} from "../../models/user";
import {UserService} from "../../services/user.service";
import {global} from "../../services/global";

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss'],
  providers: [UserService]
})
export class UserEditComponent implements OnInit {
	public title: string;
  public user: User;
  public identity;
  public token;
  public status;
  public resetVar;
  public url;

  public afuConfig = {
    multiple: false,
    formatsAllowed: ".jpg, .png, .gif, .jpeg",
    maxSize: "100",
    uploadAPI:  {
      url: global.url+'user/upload',
      headers: {
       "Authorization" : this._userService.getToken()
      }
    },
    theme: "attachPinBtn",
    hideProgressBar: false,
    hideResetBtn: true,
    hideSelectBtn: false,
    attachPinText: "sube tu imagen de usuario"
};



  constructor(
    private _userService: UserService
    ) 
  {
  	this.title = "editar usuario";
    this.user = new User(1,'','','','usuario','','','','','','','');
    this.identity = _userService.getIdentity();
    this.token = _userService.getToken();
    this.url = global.url;

    //rellenar objeto usuario
    this.user = new User(
          this.identity.sub,
          this.identity.nombre,
          this.identity.apellidos,
          '',
          this.identity.rol,
          this.identity.correo,
          '',
          '',
          this.identity.departmento,
          '',
          this.identity.descripcion,
          this.identity.imagen
      );
  }

  ngOnInit(): void {
  }

  onSubmit(form){
    this._userService.update(this.token, this.user).subscribe(
      response => {
        if(response && response.status){
          this.status = "success";

          //actualizar al usuario en sesion

          if(response.changes.nombre){
            this.user.nombre = response.changes.nombre;
          }


          if(response.changes.apellidos){
            this.user.apellidos = response.changes.apellidos;
          }


          if(response.changes.correo){
            this.user.correo = response.changes.correo;
          }


          if(response.changes.descripcion){
            this.user.descripcion = response.changes.descripcion;
          }


          if(response.changes.departmento){
            this.user.departmento = response.changes.departmento;
          }


          if(response.changes.imagen){
            this.user.imagen = response.changes.imagen;
          }

          this.identity = this.user;
          localStorage.setItem('identity', JSON.stringify(this.identity));
        }else{
          this.status = "error";
        }

      },
      error => {
        console.log(<any>error);
        this.status = "error";
      }
      );
  }

  avatarUpload(datos){
    let data = JSON.parse(datos.response);
     console.log(data.image);
     this.user.imagen = data.image;

  }

}
