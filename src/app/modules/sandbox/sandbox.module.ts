import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@app/shared';
import { SandboxRoutingModule } from './sandbox-routing.module';

import { SandboxPageComponent } from './pages/sandbox/sandbox-page.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SandboxRoutingModule
  ],
  declarations: [
    SandboxPageComponent
  ]
})
export class SandboxModule { }
