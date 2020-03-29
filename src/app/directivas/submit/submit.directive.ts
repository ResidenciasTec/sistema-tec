import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appSubmit]'
})
export class SubmitDirective {

	@HostBinding('class')
  	elementClass = 'submit-btn'

  constructor() { }

}
