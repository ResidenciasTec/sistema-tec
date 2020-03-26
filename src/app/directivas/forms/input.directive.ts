import { Directive, HostBinding } from '@angular/core';


@Directive({
  selector: '[appInput]',

})
export class InputDirective {

	@HostBinding('class')
  	elementClass = 'estructura'


  constructor() { }

}
