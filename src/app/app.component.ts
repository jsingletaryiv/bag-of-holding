import { Component, ViewChild, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnDestroy {
  myName = 'James Singletary IV';
  myLocation = 'Tampa, Florida';
  mediaQuery: MediaQueryList;

  private _mediaQueryListener: () => void;

  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

  // someMethod(): void {
  //   this.trigger.openMenu();
  // }

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mediaQuery = media.matchMedia('(max-width: 600px)');
    this._mediaQueryListener = () => changeDetectorRef.detectChanges();
    this.mediaQuery.addListener(this._mediaQueryListener);
  }

  ngOnDestroy(): void {
    this.mediaQuery.removeListener(this._mediaQueryListener);
  }
}
