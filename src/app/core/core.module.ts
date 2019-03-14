import { NgModule, Optional, SkipSelf, VERSION, OnInit } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from '@core/core-routing.module';
import { SharedModule } from '@shared/shared.module';

import { NavbarComponent } from '@core/navbar/navbar.component';

// import { Scroll } from 'scroll-utility';

// import { TrackScrollDirective } from '@shared/directives/track-scroll.directive';
// import { WINDOW_PROVIDERS } from '@app/shared/services/window-host.service';


// TODO:: Generate a utils.module that will contain various
// directives to help facilitate System / Admin requests
// import { environment } from '../../environments/environment';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    CoreRoutingModule,
    SharedModule
    // Scroll
  ],
  declarations: [
    NavbarComponent
  ],
  providers: [
    // WINDOW_PROVIDERS
  ],
  exports: [
    BrowserAnimationsModule,
    CoreRoutingModule,
    NavbarComponent,
    SharedModule
    // Scroll
    // TrackScrollDirective
  ]
})

export class CoreModule implements OnInit {

  // Request current version of Angular
  // public appName: string = environment.app.NAME;
  // public appVersion: string = environment.app.VERSION;
  public ngVersion: string = VERSION.full;

  // Request current version of Angular
  // public appVersion: string = environment.VERSION;

  // CoreModule Import Guard - See AppModule
  constructor (@Optional() @SkipSelf() parentModule: CoreModule) {

    if (parentModule) {
      throw new Error('CoreModule is already loaded. Only import from AppModule');
    } else {
      console.log('Angular: v' + this.ngVersion);
      console.log('CoreModule Loaded!');
    }
  }

  ngOnInit() { }

}
