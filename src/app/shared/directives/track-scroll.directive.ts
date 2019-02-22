import { Directive, ElementRef, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({ selector: '[appTrackScroll]' })
export class TrackScrollDirective {

  // @Output() setScroll = new EventEmitter();
  isScrolling: boolean;
  scrollYPos: number;

  constructor(private elem: ElementRef) {
    this.isScrolling = false;
    console.log('TrackScrollDirective Ready...');
  }

  @HostListener('window:scroll', ['$event']) onWindowScroll(event) {
    this.scrollYPos = event.srcElement.scrollTop;
    // Read-Only properties determined by the browser
    const scrollYOffset = window.pageYOffset                 || // Latest evergreen browser support
                          document.documentElement.scrollTop || // Specific for IE 9 browser support
                          document.body.scrollTop            || // For older (5+) outdated browsers
                          0;                                    // Default to 0 (top)

    console.log('Scroll Event : ', this.scrollYPos );

    if (!this.isScrolling) { this.isScrolling = true; }
  }

  resetScrollPos() { this.elem.nativeElement.scrollTop = this.scrollYPos; }

}
