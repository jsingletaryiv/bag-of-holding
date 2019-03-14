import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconsModule } from '@shared/icons/icons.module';
import { MaterializeModule } from '@shared/materialize/materialize.module';

import { HeaderComponent } from '@shared/header/header.component';
import { FooterComponent } from '@shared/footer/footer.component';

import { TrackScrollDirective } from '@shared/directives/track-scroll.directive';

@NgModule({
  imports: [
    CommonModule,
    IconsModule,
    MaterializeModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    TrackScrollDirective
  ],
  exports: [
    IconsModule,
    MaterializeModule,
    HeaderComponent,
    FooterComponent,
    TrackScrollDirective
  ]
})
export class SharedModule { }
