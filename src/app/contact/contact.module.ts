import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';

import { ContactComponent } from '../contact/contact.component';

@NgModule({
  declarations: [ContactComponent],
  imports: [CommonModule, NzPageHeaderModule, NzBreadCrumbModule],
})
export class ContactModule {}
