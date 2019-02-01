import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@app/shared/shared.module';
import { AboutRoutingModule } from '@app/modules/about/about-routing.module';

import { AboutPageComponent } from '@app/modules/about/pages/about/about-page.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AboutRoutingModule
  ],
  declarations: [AboutPageComponent]
})
export class AboutModule { }
