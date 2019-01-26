import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@app/shared';
import { ProjectsRoutingModule } from './projects-routing.module';

import { ProjectsPageComponent } from './pages/projects/projects-page.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ProjectsRoutingModule
  ],
  declarations: [
    ProjectsPageComponent
  ]
})
export class ProjectsModule { }
