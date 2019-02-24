import { Component, OnInit, OnDestroy, AfterViewInit, HostListener, ElementRef } from '@angular/core';
// import { TrackScrollDirective } from '@shared/directives/track-scroll.directive';

// import { Scroll } from 'scroll-utility';
// import scrollManager from 'scroll-utility';
// import windowScrollManager from 'scroll-utility';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent implements OnInit, OnDestroy, AfterViewInit {

  // Page Header
  // pageTitle = 'Welcome';
  pageSubTitle = 'Application / UI/UX Developer';
  // pageSubTitle = 'Since MCMXCVIII';

  // Section 1
  section1Title = 'Forging Concepts into Creation //';
  section1Text = '';
  missionTitle = 'Mission Statement //';
  missionText = '';

  // scrollNum = 0;
  imgPath = '../../../../../assets/images/parallax/overview/';

  constructor( private el: ElementRef ) { }

  ngOnInit(): void { }

  ngAfterViewInit(): void { }

  ngOnDestroy(): void { }

  // TODO:: Make this feature modular / extensible by using it as a @Directive //
  @HostListener('scroll', ['$event']) onWindowScroll(evt: Event) {
    // Host 'native' Element of event
    const hostElement = this.el.nativeElement;
    const scrollYPos = hostElement.scrollTop; // distance from browser top (+/-)
    const topDistance: number = hostElement.offsetHeight;

    // NOTE:: Pass in as parameter when @Directive is in place //
    let isScrolling: boolean;

    // Check if scrolling - Use for sticky navbar
    if (!isScrolling) {
      isScrolling = true;
      console.log('isScrolling : ' + isScrolling);
    }

    // NOTE:: Consider using a Map or Set if you’re storing collections of objects //
    // const layers: NodeListOf<Element> = document.querySelectorAll('[data-type="parallax"]');
    const layers = Array.from(document.querySelectorAll('[data-type="parallax"]'));

    // Updates the <translate3d> property for all layers
    layers.forEach((elem, i) => {
      const layer = elem,
            // imagePath = '../../../../../assets/images/parallax/overview/',
            count: number = i + 1;

      let depth: string,
          depthNum: number,
          movement: number,
          translate3d: string;

      depth = layer.getAttribute('data-depth');
      depthNum = Number(depth);
      movement = -(topDistance * depthNum);
      translate3d = 'translate3d(0, ' + movement + 'px, 0)';
      // parallaxLayer.setAttribute('style', 'background-image: url("' + imagePath + 'parallax-layer-' + count + '.png");');
      layer.setAttribute('style', '-webkit-transform: ' + translate3d + ';');
      layer.setAttribute('style', '-moz-transform: ' + translate3d + ';');
      layer.setAttribute('style', '-ms-transform: ' + translate3d + ';');
      layer.setAttribute('style', '-o-transform: ' + translate3d + ';');
      layer.setAttribute('style', 'transform: ' + translate3d + ';');

      console.log('Parallax Layer : ', layers);

    });

    console.log('Scroll <Y> Position : ', scrollYPos);

  }

  // Reset <HostElement>
  resetScrollPos() { this.el.nativeElement.scrollTo(0, 0); }

}
