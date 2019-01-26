import { NgModule, Optional, SkipSelf, VERSION } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CoreRoutingModule } from './core-routing.module';
import { SharedModule } from '@app/shared';

import { NavbarComponent } from './navbar/navbar.component';
// TODO:: Generate a utils.module that will contain various
// directives to help facilitate System / Admin requests
// import { environment } from '../../environments/environment';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    CoreRoutingModule,
    SharedModule
  ],
  declarations: [
    NavbarComponent
  ],
  providers: [],
  exports: [
    CoreRoutingModule,
    NavbarComponent
  ]
})

export class CoreModule {

  // Request current version of Angular
  // public appName: string = environment.app.NAME;
  // public appVersion: string = environment.app.VERSION;
  public ngVersion: string = VERSION.full;

  // CoreModule Import Guard - See AppModule
  constructor (@Optional() @SkipSelf() parentModule: CoreModule) {

    if (parentModule) {
      throw new Error('Oops! `CoreModule` is already loaded. Import only once - preferably in `AppModule`.');
    } else {
      // console.log('Application :: ' + this.appName + ' v' + this.appVersion);
      console.log('Frameworks  :: Angular ' + this.ngVersion);
      console.log('CoreModule Loaded.');
      console.log('Bootstrapping Complete!');
    }

  }

}
