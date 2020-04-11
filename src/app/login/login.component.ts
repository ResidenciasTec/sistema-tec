import { Component, OnInit, DoCheck } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { UserService } from "../services/user.service";
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Login } from '../interfaces/login';


@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
	providers: [UserService]
})

export class LoginComponent implements OnInit, DoCheck {
	public title: string;
	public status: string;
	public token;
	public identity;
	public loading: boolean;
	public form: FormGroup;


	constructor(
		private _userService: UserService,
		private _router: Router,
		private _route: ActivatedRoute,
		private _formBuilder: FormBuilder
	) {
		this.title = "entra al sistema con correo institucional y password";
		this.loading = false;

	}

	ngOnInit(): void {
		window.scrollTo(0,0);
		//se ejecuta siempre y cierra sesion solo cuando le llega el parametro sure por url
		this.logout();
		this.buildForm();
		
	}

	ngDoCheck() {
		this.loading;
	}

	private buildForm() {

		this.form = this._formBuilder.group({
			email: new FormControl('', { validators: [Validators.required, Validators.email], updateOn: 'change' }),
			password: new FormControl('', { validators: [Validators.required, Validators.minLength(5)], updateOn: 'change' })
		});

	}

	clickami(event) {
		this.loading = true;

		if (this.loading == true) {
			this.loading = false;
		}
	}

	onSubmit(form) {
		this.loading = true;
		this._userService.signup(form).subscribe(
			response => {

				if (response.status == 'success') {
					this.status = 'success';

					this.identity = response.usuario;
					this.token = response.acceso.token;

					//persistir al usuario identificado
					localStorage.setItem('token', this.token);
					localStorage.setItem('identity', JSON.stringify(this.identity));
					localStorage.setItem('logueado', JSON.stringify(this.identity));
					this.loading = false;				
					
					//redirigir al inicio
					this._router.navigate(['inicio']);

				}else{
					this.loading = false;
					this.status = 'error';
					this.form.reset();
					
				}
;
			},
			error => {
				this.loading = false;
				this.status = 'error';
				console.log(<any>error);
			}

		);
	}

	logout() {
		this._route.params.subscribe(params => {
			let logout = +params['sure'];

			if (logout == 1) {
				localStorage.clear();


				this.token = null;
				this.identity = null;

				//redireccion a inicio
				this._router.navigate(['inicio']);
			}
		});
	}

}
