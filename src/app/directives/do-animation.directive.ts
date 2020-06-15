import { Directive, Input, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDoAnimation]',
})
export class DoAnimationDirective {
  @Input() animationOnHover;
  @HostBinding('class') hoverClass;
  constructor() {}
  @HostListener('mouseenter') onMouseEnter(eventData: Event) {
    this.hoverClass = this.animationOnHover;
  }

  @HostListener('mouseleave') onMouseLeave(eventData: Event) {
    this.hoverClass = '';
  }
}
