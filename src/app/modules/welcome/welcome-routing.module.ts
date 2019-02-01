import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomePageComponent } from '@app/modules/welcome/pages/welcome/welcome-page.component';

const routes: Routes = [
  {
    path: '',
    component: WelcomePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WelcomeRoutingModule { }
