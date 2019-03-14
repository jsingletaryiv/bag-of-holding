import { Directive, ElementRef, EventEmitter, HostListener, Input, Output, OnInit } from '@angular/core';

@Directive({
  selector: '[appParallaxScroller]'
})
export class TrackScrollDirective implements OnInit {

  constructor(private el: ElementRef) { }

  public isScrolling: boolean;
  // private hostElement: HTMLElement;

  // @Output()
  // public appParallaxScroller = new EventEmitter();

  // 'window'|'document'|'body'|'component'|any
  @HostListener('document:scroll', ['$event']) onScroll(evt: any) {
    // Host 'native' Element of event
    const hostElement = this.el.nativeElement;
    // const hostElement = this.el.nativeElement.querySelector('.app-header');
    // const scrollYPos = hostElement.scrollTop;
    const topDistance = pageYOffset; // distance from browser top (+/-)

    // TODO:: Pass in as parameter after @Directive is created //
    let isScrolling = this.isScrolling;

    // Check if scrolling - Use for sticky navbar
    if (!isScrolling) {
      isScrolling = true;
      console.log('isScrolling : ' + isScrolling);
    }

    // NOTE:: Consider using a Map or Set if you’re storing collections of objects //
    // const layers: NodeListOf<Element> = document.querySelectorAll('[data-type="parallax"]');
    const layers = Array.from(document.querySelectorAll('[data-type="parallax"]'));

    // Updates the <translate3d> property for all layers
    layers.forEach((elem: HTMLDivElement, i) => {
      const layer = elem,
            // imagePath = '../../../../../assets/images/parallax/overview/',
            count: number = i + 1;

      let depth: any,
          depthNum: number,
          movement: number,
          translate3d: string;

      depth = layer.getAttribute('data-depth');
      depthNum = Number(depth);
      movement = -(topDistance * depth);
      translate3d = 'translate3d(0, ' + movement + 'px, 0)';
      // // layer.setAttribute('style', 'background-image: ' + 'url("' + imagePath + 'parallax-layer-' + count + '.png");');
      layer.setAttribute('style', '-webkit-transform: ' + translate3d + ';');
      layer.setAttribute('style', '-moz-transform: ' + translate3d + ';');
      layer.setAttribute('style', '-ms-transform: ' + translate3d + ';');
      layer.setAttribute('style', '-o-transform: ' + translate3d + ';');
      layer.setAttribute('style', 'transform: ' + translate3d + ';');

      // layer.style['-webkit-transform'] = translate3d;
      // layer.style['-moz-transform'] = translate3d;
      // layer.style['-ms-transform'] = translate3d;
      // layer.style['-o-transform'] = translate3d;
      // layer.style.transform = translate3d;

      console.log('Layer Movement : ', movement);

    });

    console.log('Event : ', evt.type);
    // console.log('Parallax Layer : ', layers);
    // console.log('Scroll <Y> Position : ', scrollYPos);
    console.log('Top Distance : ', topDistance);

  }

  // Lifecycle Methods
  ngOnInit() {
    console.log('TrackScrollDirective is ready son...');
    this.isScrolling = false;
    // this.hostElement = this.el.nativeElement.querySelector('.app-header');
    console.log('HostElement : ', this.el.nativeElement);
  }

  // Reset <HostElement> Offset
  // resetScrollPos() { this.el.nativeElement.querySelector('.app-header').scrollTo(0, 0); }

}
