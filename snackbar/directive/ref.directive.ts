import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[snackbarRef]',
})
export class SnackbarDirective {
  constructor(public containerRef: ViewContainerRef) {}
}
