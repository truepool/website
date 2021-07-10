import { Directive, HostListener, Input, OnInit } from '@angular/core';

@Directive({selector: '[appSmoothlyScrollTo]'})
export class SmoothlyScrollToDirective {
  @Input() appSmoothlyScrollTo: string;

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent): void {
    if (!window.hasOwnProperty('scrollTo')) {
      return;
    }

    const target = document.querySelector(this.appSmoothlyScrollTo) as HTMLElement;

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
