import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@app/shared';
import { AboutRoutingModule } from './about-routing.module';

import { AboutPageComponent } from './pages/about/about-page.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AboutRoutingModule
  ],
  declarations: [AboutPageComponent]
})
export class AboutModule { }
