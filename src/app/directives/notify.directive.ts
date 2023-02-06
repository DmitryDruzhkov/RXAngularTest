import { Directive, ElementRef, NgZone } from '@angular/core';

@Directive({
  selector: '[appNotify]',
  standalone: true
})
export class NotifyDirective {

  domElement: any;

  constructor(private elementRef: ElementRef, private zone: NgZone) { 
    this.domElement = this.elementRef.nativeElement;
    this.zone.runOutsideAngular(() => {
      this.domElement.style.setProperty(`transition`, `background 0.5s ease`);
    })
  }

  public ngDoCheck(): void {
    this.zone.runOutsideAngular(() => {
      this.domElement.style.setProperty(`background-color`, `#f9bcbc`);
      setTimeout(() => {
        this.domElement.style.setProperty(`background-color`, `white`);
      }, 500);
    })
  }

}
