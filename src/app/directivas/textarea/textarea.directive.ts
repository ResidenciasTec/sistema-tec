import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appTextarea]'
})
export class TextareaDirective {

	@HostBinding('class')
  	elementClass = 'textarea'

  constructor() { }

}
