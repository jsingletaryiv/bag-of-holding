import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@app/shared/shared.module';
import { ProjectsRoutingModule } from '@app/modules/projects/projects-routing.module';

import { ProjectsPageComponent } from '@app/modules/projects/pages/projects/projects-page.component';

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
