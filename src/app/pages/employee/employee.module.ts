import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';

import { NzTableModule } from 'ng-zorro-antd/table';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDividerModule } from 'ng-zorro-antd/divider';

@NgModule({
  declarations: [EmployeeComponent],
  imports: [
    CommonModule,
    NzTableModule,
    NzIconModule,
    NzButtonModule,
    NzDividerModule,
    EmployeeRoutingModule,
  ],
})
export class EmployeeModule {}
