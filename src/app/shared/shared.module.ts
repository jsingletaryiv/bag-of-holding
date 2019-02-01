import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconsModule } from '@app/shared/icons/icons.module';
import { MaterializeModule } from '@app/shared/materialize/materialize.module';

import { FooterComponent } from '@app/shared/footer/footer.component';
import { HeaderComponent } from '@app/shared/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    IconsModule,
    MaterializeModule
  ],
  declarations: [
    FooterComponent,
    HeaderComponent
  ],
  exports: [
    CommonModule,
    IconsModule,
    MaterializeModule,
    FooterComponent,
    HeaderComponent
  ]
})
export class SharedModule { }
