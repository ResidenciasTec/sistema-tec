import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TextareaDirective} from "./textarea.directive";



@NgModule({
  declarations: [
  TextareaDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
  	TextareaDirective
  ]
})
export class TextareaModule { }
