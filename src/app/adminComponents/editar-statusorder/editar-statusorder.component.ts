import { Component, OnInit } from '@angular/core';
import {StatusorderService} from "../../services/statusorder.service";
import {variableService} from "../../services/variables.service"
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute, Params } from "@angular/router";
import {ToastrService} from "ngx-toastr";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-editar-statusorder',
  templateUrl: './editar-statusorder.component.html',
  styleUrls: ['./editar-statusorder.component.scss'],
  providers: [StatusorderService, variableService]
})
export class EditarStatusorderComponent implements OnInit {

  token: any;
  textoCrear: string;
  id: number;
  form: FormGroup;
  statusorder: any;
  statusorders: any;

  constructor(    
    private _statusorderService: StatusorderService,
    private _variableService: variableService,
    private _formBuilder: FormBuilder,
    private _toastr: ToastrService,
    private _router: Router,
    private _route: ActivatedRoute,
    private _spinner: NgxSpinnerService
    ) {      
      this.token = this._variableService.getToken();
      this.textoCrear = "Actualice el satus seleccionado!";  
      this.statusorders = JSON.parse(localStorage.getItem('statusorders'));
    }

  ngOnInit(): void {
    window.scrollTo(0,0);
    this.getStatus();
  }

  private editarForm() {

		this.form = this._formBuilder.group({
      status: new FormControl(this.statusorder.status, { validators: [Validators.required], updateOn: 'change' }),
		});

  } 

  getStatus(){

    this._route.params.subscribe(params => {

      this.id = +params['id'];

        this.statusorder = this.statusorders.find(element => element.id == this.id);

        if(this.statusorder){
          this.editarForm();
        }
      });
  }

  onSubmit(form){
    this._spinner.show();
    this._statusorderService.updateServicio(this.token, form, this.id).subscribe(
      response => {
        if(response.status == 'success'){
          this._toastr.success('El status se ha creado con éxito', 'LISTO');
          this.form.reset();
          window.scrollTo(0,0);
          this._spinner.hide();

          //redireccion a inicio
          this._router.navigate(['status/mantenimiento']);
    

        }else{
          this._spinner.hide();
          this._toastr.error('Parece que ha habido algun error','OOPS');

        }
      },
      error => {
        this._spinner.hide();
        this._toastr.error('Parece que los datos han sido erróneos','OOPS');
        console.log(<any>error);

      }
    );

  }

}





  
   
    

































