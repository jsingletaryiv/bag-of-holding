import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@app/shared/shared.module';
import { WelcomeRoutingModule } from '@app/modules/welcome/welcome-routing.module';

import { WelcomePageComponent } from '@app/modules/welcome/pages/welcome/welcome-page.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    WelcomeRoutingModule
  ],
  declarations: [
    WelcomePageComponent
  ]
})
export class WelcomeModule { }
