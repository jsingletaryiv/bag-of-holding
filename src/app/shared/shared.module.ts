import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { FlexLayoutModule } from '@angular/flex-layout';

import { IconsModule } from './icons/icons.module';
import { MaterialModule } from './material/material.module';
import { MaterializeModule } from './materialize/materialize.module';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [
    CommonModule,
    // FlexLayoutModule,
    IconsModule,
    MaterialModule,
    MaterializeModule
  ],
  declarations: [
    FooterComponent,
    HeaderComponent
  ],
  exports: [
    CommonModule,
    // FlexLayoutModule,
    IconsModule,
    MaterialModule,
    MaterializeModule,
    FooterComponent,
    HeaderComponent
  ]
})
export class SharedModule { }
