import { Component, OnInit } from '@angular/core';
import {UserService} from "../services/user.service";
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
  providers: [UserService]
})
export class RegistroComponent implements OnInit {
  public title:string;
  public status: string;
  public loading: boolean;
	public form: FormGroup;

  constructor(
  	private _userService: UserService,
    private _formBuilder: FormBuilder,
    private _router: Router,
		private _route: ActivatedRoute,
  	) { 
    this.title = "Crea una cuenta";
    this.loading = false;

  }

  ngOnInit(): void {

    console.log("'componente de registro correcto...");
    this.buildForm();

  }

  
	private buildForm() {

		this.form = this._formBuilder.group({
      name: new FormControl('', { validators: [Validators.required, Validators.minLength(3)], updateOn: 'change' }),
      surname: new FormControl('', { validators: [Validators.required, Validators.minLength(3)], updateOn: 'change' }),
      email: new FormControl('', { validators: [Validators.required, Validators.email], updateOn: 'change' }),
      control_number: new FormControl('', { validators: [Validators.required], updateOn: 'change' }),
      password: new FormControl('', { validators: [Validators.required, Validators.minLength(5)], updateOn: 'change' }),
      repeat_password: new FormControl('', { validators: [Validators.required, Validators.minLength(5)], updateOn: 'change' })
		});

  }

  checkPasswords(group: FormGroup) { 
  let pass = group.get('password').value;
  let confirmPass = group.get('repeat_password').value;

  return pass === confirmPass ? null : { notSame: true }     
}


  onSubmit(form){
  this.loading = true;
  this._userService.register(form).subscribe(
	  	response =>{
	  		if(response.status =="success"){
	  			this.status = 'success';
	  			console.log(response);

	  		}else{
          this.loading = false;
	  			this.status = 'error';

	  		} 
	  		
	  	},
	  	error =>{
        this.loading = false;
	  		this.status = 'error';
	  		console.log(<any>error);

	  	}
  	);


  }

}
