import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMycustom]'
})
export class MycustomDirective {

  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'yellow';
  }

}
