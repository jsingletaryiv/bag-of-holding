import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconsModule } from '@app/shared/icons/icons.module';
import { MaterializeModule } from '@app/shared/materialize/materialize.module';

import { HeaderComponent } from '@app/shared/header/header.component';
import { FooterComponent } from '@app/shared/footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    IconsModule,
    MaterializeModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  exports: [
    IconsModule,
    MaterializeModule,
    HeaderComponent,
    FooterComponent
  ]
})
export class SharedModule { }
