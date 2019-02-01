import { Component,
         HostListener,
         Inject,
         OnInit,
         OnDestroy } from '@angular/core';

// import { BrowserModule } from '@angular/platform-browser';

import { DOCUMENT } from '@angular/platform-browser';
import { WindowHostService } from '@app/shared/services/window-host.service';
// import { WINDOW } from '@app/shared/services/window-host.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnDestroy, OnInit {
  myName = 'James Singletary IV';
  myLocation = 'Tampa, Florida';

  constructor(@Inject(DOCUMENT) private document: Document,
              @Inject(WindowHostService) private window: Window) {
  }

  @HostListener('window:scroll')onWindowScroll() {
    const offset = this.window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
    console.log('Scroll `Y` Offsett:: ', offset);
  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {

  }

}
