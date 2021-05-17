import { AfterViewInit, Component, ComponentFactoryResolver, Input, ViewChild } from '@angular/core';
import { CustomSnackComponents } from '.';
import { SnackbarDirective } from '../../directive/ref.directive';

@Component({
  selector: 'sd-snackbar-templates',
  templateUrl: './snackbar-templates.component.html',
})
export class SnackbarTemplatesComponent implements AfterViewInit {
  @Input() template = 'string';

  @ViewChild(SnackbarDirective) snakbarRef: SnackbarDirective;

  components = CustomSnackComponents;

  constructor(private resolver: ComponentFactoryResolver) {}

  ngAfterViewInit(): void {
    const component = this.components[this.template];
    const snackbarFactory = this.resolver.resolveComponentFactory(component);
    this.snakbarRef.containerRef.createComponent(snackbarFactory);
  }
}
