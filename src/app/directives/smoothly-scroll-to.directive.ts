import {
  Directive, HostListener, Input,
} from '@angular/core';

@Directive({ selector: '[appSmoothlyScrollTo]' })
export class SmoothlyScrollToDirective {
  @Input() appSmoothlyScrollTo: string;

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent): void {
    // eslint-disable-next-line no-prototype-builtins
    if (!window.hasOwnProperty('scrollTo')) {
      return;
    }

    const target: HTMLElement = document.querySelector(this.appSmoothlyScrollTo);

    if (!target) {
      return;
    }

    window.scrollTo({
      top: target.offsetTop,
      behavior: 'smooth',
    });

    event.preventDefault();
  }
}
