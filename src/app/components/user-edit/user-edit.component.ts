import { Component, OnInit, DoCheck } from '@angular/core';
import {Router, ActivatedRoute, Params} from "@angular/router";
import {UserService} from "../../services/user.service";
import {global} from "../../services/global";
import { Validators, FormControl, FormBuilder } from '@angular/forms';
import {ToastrService} from "ngx-toastr";
import { NgxSpinnerService } from "ngx-spinner";



@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss'],
  providers: [UserService]
})
export class UserEditComponent implements OnInit, DoCheck {
	public title: string;
  public identity;
  public token;
  public status;
  public resetVar;
  public url;
  public departamentos;
  public img;
  public logueado;
  public form;

  public afuConfig = {
    multiple: false,
    formatsAllowed: ".jpg, .png, .gif, .jpeg",
    maxSize: "100",
    uploadAPI:  {
      url: global.url+'upload',
      headers: {
       "Authorization" : 'bearer ' + this.token
      }
    },
    theme: "attachPinBtn",
    hideProgressBar: true,
    hideResetBtn: true,
    hideSelectBtn: false,
    attachPinText: "sube tu imagen de usuario"
};



  constructor(
    private _userService: UserService,
    private _router: Router,
    private _route: ActivatedRoute,
    private _formBuilder: FormBuilder,
    private _toastr: ToastrService,
    private _spinner: NgxSpinnerService,
    ) 
  {
  	this.title = "editar usuario";
    this.identity = JSON.parse(localStorage.getItem('identity'));
    this.logueado = JSON.parse(localStorage.getItem('logueado'));
    this.token = localStorage.getItem('token');
    this.url = global.url;

  }

  ngOnInit(): void {
    window.scrollTo(0,0);
    this.buildForm();
   
    
  }


  ngDoCheck(){
     this.identity.image;
  }

  private buildForm() {

		this.form = this._formBuilder.group({
      name: new FormControl(this.identity.name, { validators: [Validators.required], updateOn: 'change' }),
      surname: new FormControl(this.identity.surname, { validators: [Validators.required], updateOn: 'change' }),
      email: new FormControl(this.identity.email, { validators: [Validators.required, Validators.email], updateOn: 'change' }),
      description: new FormControl(this.identity.description),
      phone: new FormControl(this.identity.phone),
      image: new FormControl(this.identity.image),
		});

  }  



  onSubmit(form){
    this._spinner.show();
    console.log(this.token);
    this._userService.update(this.token, form, this.identity.id).subscribe(
      response => {
        if(response.status == 'success'){
          
          //actualizar al usuario en sesion
          this._userService.detalle(this.identity.id).subscribe(
            response => {
              let crudo = response.user;

              localStorage.setItem('identity', JSON.stringify(crudo));
              localStorage.setItem('logueado', JSON.stringify(crudo));
              this.identity = JSON.parse(localStorage.getItem('identity'));
              this.status = "success";
              this._spinner.hide();
              this._toastr.success('Tus datos se actualizaron con exito.', 'PERFIL ACTUALIZADO');


          setTimeout (() => {
                this._router.navigate(['/perfil']); 
            }, 1000);

            },
            error => {
              this._spinner.hide();
              console.log(<any>error);
            }

          );

         
        }else{
          this.status = "error";
          this._spinner.hide();
          this._toastr.error('Algunos de tus datos no fueron correctos.', 'SOLICITUD NO EXITOSA');
        }

      },
      error => {
        this._spinner.hide();
        console.log(<any>error);
        this.status = "error";
      }
      );
  }

  avatarUpload(datos){
    let data = datos.response;
     console.log(data.image);
     this.identity.image = data.image;
     this.logueado.image = data.image;

  }

}
