import { NgModule, Optional, SkipSelf, VERSION, OnInit } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

// import { MaterializeModule } from '@app/shared/materialize/materialize.module';
import { CoreRoutingModule } from '@app/core/core-routing.module';
import { SharedModule } from '@app/shared/shared.module';
// import { WINDOW_PROVIDERS } from '@app/shared/services/window-host.service';

import { NavbarComponent } from '@app/core/navbar/navbar.component';

// TODO:: Generate a utils.module that will contain various
// directives to help facilitate System / Admin requests
// import { environment } from '../../environments/environment';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    // MaterializeModule,
    CoreRoutingModule,
    SharedModule
  ],
  declarations: [
    NavbarComponent
  ],
  providers: [
    // WINDOW_PROVIDERS
  ],
  exports: [
    BrowserAnimationsModule,
    // MaterializeModule​​,
    CoreRoutingModule,
    SharedModule,
    NavbarComponent
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
