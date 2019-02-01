import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@app/shared/shared.module';
import { ContactRoutingModule } from '@app/modules/contact/contact-routing.module';

import { ContactPageComponent } from '@app/modules/contact/pages/contact/contact-page.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ContactRoutingModule
  ],
  declarations: [ContactPageComponent]
})
export class ContactModule { }
