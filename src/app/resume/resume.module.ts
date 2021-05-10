import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzBackTopModule } from 'ng-zorro-antd/back-top';

import { ResumeComponent } from '../resume/resume.component';

@NgModule({
  declarations: [ResumeComponent],
  imports: [
    CommonModule,
    NzPageHeaderModule,
    NzBreadCrumbModule,
    NzTypographyModule,
    NzDescriptionsModule,
    NzCardModule,
    NzSpaceModule,
    NzBackTopModule,
  ],
})
export class ResumeModule {}
