import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubmitDirective } from "./submit.directive";



@NgModule({
  declarations: [
  	SubmitDirective
  ],
  imports: [
    CommonModule
  ], 
  exports: [
	SubmitDirective
  ]
})
export class SubmitModule { }
