import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SandboxPageComponent } from '@app/modules/sandbox/pages/sandbox/sandbox-page.component';

const routes: Routes = [
  {
    path: '',
    component: SandboxPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SandboxRoutingModule { }
