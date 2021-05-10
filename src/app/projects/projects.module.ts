import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzListModule } from 'ng-zorro-antd/list';

import { ProjectsComponent } from '../projects/projects.component';
import { ProjectComponent } from './project/project.component';

@NgModule({
  declarations: [ProjectsComponent, ProjectComponent],
  imports: [CommonModule, NzPageHeaderModule, NzBreadCrumbModule, NzListModule],
})
export class ProjectsModule {}
