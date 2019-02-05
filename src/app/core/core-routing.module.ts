import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'about',
    loadChildren: '../modules/about/about.module#AboutModule'
  },
  {
    path: 'contact',
    loadChildren: '../modules/contact/contact.module#ContactModule'
  },
  {
    path: 'projects',
    loadChildren: '../modules/projects/projects.module#ProjectsModule'
  },
  {
    path: 'sandbox',
    loadChildren: '../modules/sandbox/sandbox.module#SandboxModule'
  },
  {
    path: 'welcome',
    loadChildren: '../modules/welcome/welcome.module#WelcomeModule'
  },
  { // Default Route
    path: '',
    redirectTo: '/welcome',
    pathMatch: 'full'
  }
  // { // TODO:: Add 404 Component
  //   path: '**',
  //   component: TBD
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
