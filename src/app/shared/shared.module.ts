import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzMenuModule } from 'ng-zorro-antd/menu';

import { SidebarComponent } from '../shared/sidebar/sidebar.component';
import { AvatarComponent } from '../shared/sidebar/avatar/avatar.component';
import { NavMenuComponent } from '../shared/sidebar/nav-menu/nav-menu.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SidebarComponent, AvatarComponent, NavMenuComponent],
  imports: [
    CommonModule,
    RouterModule,
    NzAvatarModule,
    NzTypographyModule,
    NzSpaceModule,
    NzMenuModule,
  ],
  exports: [CommonModule, SidebarComponent],
})
export class SharedModule {}
