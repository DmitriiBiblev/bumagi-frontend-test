import { Component, ChangeDetectionStrategy, ElementRef, ViewEncapsulation } from '@angular/core';
import { CanDisable, CanDisableCtor, CanFull, CanFullCtor, mixinDisabled, mixinFull } from '../../helpers';
import { Button, ButtonCtor, mixinButton } from './button.helper';

class ButtonBase {
  constructor(
    public readonly elementRef: ElementRef,
  ) {
  }
}

const ButtonMixinBase: ButtonCtor & CanDisableCtor & CanFullCtor & typeof ButtonBase
  = mixinButton(mixinFull(mixinDisabled(ButtonBase)));

@Component({
  selector: 'button[b-button]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  host: {
    '[attr.disabled]': 'disabled || null',
    'class': 'b-button',
    '[class.full]': 'full',
    '[class.large]': 'large',
    '(click)': 'ripple($event)',
  },
  inputs: ['large', 'disabled', 'full'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent extends ButtonMixinBase implements Button, CanDisable, CanFull {
  public $event!: MouseEvent;

  constructor(
    public override readonly elementRef: ElementRef,
  ) {
    super(elementRef);
  }

  public ripple(e: MouseEvent): void {
    const element = this.elementRef.nativeElement;
    const duration: number = 500;
    const x: number = e.pageX - element.offsetLeft;
    const y: number = e.pageY - element.offsetTop;
    let animationFrame: number;
    let animationStart: number;

    const animationStep = (timestamp: number): void => {
      if (!animationStart) animationStart = timestamp;

      let frame = timestamp - animationStart;

      if (frame < duration) {
        let easing = (frame / duration) * (2 - (frame / duration));
        let circle = `circle at ${x}px ${y}px`;
        let color = `rgba(105, 121, 248, ${.9 * (1 - easing)})`;
        let stop = (90) * easing + '%';

        element.style.backgroundImage = `radial-gradient(${circle}, ${color} ${stop}, transparent ${stop})`;
        animationFrame = window.requestAnimationFrame(animationStep);
      } else {
        element.style.backgroundImage = 'none';

        window.cancelAnimationFrame(animationFrame);
      }
    };
    animationStep(e.timeStamp);
  }
}
