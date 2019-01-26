import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@app/shared';
import { ContactRoutingModule } from './contact-routing.module';

import { ContactPageComponent } from './pages/contact/contact-page.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ContactRoutingModule
  ],
  declarations: [ContactPageComponent]
})
export class ContactModule { }
