import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@shared/shared.module';

import { WelcomeRoutingModule } from '@routes/welcome/welcome-routing.module';
import { WelcomePageComponent } from '@routes/welcome/pages/welcome/welcome-page.component';

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
