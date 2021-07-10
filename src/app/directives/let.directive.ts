import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

interface LetContext<T> {
  appLet: T;
}

@Directive({
  selector: '[appLet]'
})
export class LetDirective<T> {
  private _context: LetContext<T> = { appLet: null };

  constructor(viewContainer: ViewContainerRef, templateRef: TemplateRef<LetContext<T>>) {
    viewContainer.createEmbeddedView(templateRef, this._context);
  }

  @Input()
  set appLet(value: T) {
    this._context.appLet = value;
  }
}
