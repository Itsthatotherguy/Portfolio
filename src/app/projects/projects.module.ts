import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';

import { ProjectsComponent } from '../projects/projects.component';

@NgModule({
  declarations: [ProjectsComponent],
  imports: [
    CommonModule,
    NzPageHeaderModule,
    NzBreadCrumbModule,
    NzListModule,
    NzSpaceModule,
    NzDividerModule,
    NzCollapseModule,
    NzDescriptionsModule,
  ],
})
export class ProjectsModule {}
