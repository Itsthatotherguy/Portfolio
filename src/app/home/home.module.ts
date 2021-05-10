import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';

import { HomeComponent } from '../home/home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, NzTypographyModule, NzPageHeaderModule],
})
export class HomeModule {}
