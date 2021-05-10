import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzListModule } from 'ng-zorro-antd/list';

import { AboutMeComponent } from './about-me.component';
import { BackgroundTabPaneComponent } from './background-tab-pane/background-tab-pane.component';
import { SkillsTabPaneComponent } from './skills-tab-pane/skills-tab-pane.component';
import { CertificatesTabPaneComponent } from './certificates-tab-pane/certificates-tab-pane.component';

@NgModule({
  declarations: [
    AboutMeComponent,
    BackgroundTabPaneComponent,
    SkillsTabPaneComponent,
    CertificatesTabPaneComponent,
  ],
  imports: [
    CommonModule,
    NzPageHeaderModule,
    NzBreadCrumbModule,
    NzTabsModule,
    NzTypographyModule,
    NzDividerModule,
    NzProgressModule,
    NzTableModule,
    NzListModule,
  ],
})
export class AboutMeModule {}
