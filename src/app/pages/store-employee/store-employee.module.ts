import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreEmployeeRoutingModule } from './store-employee-routing.module';
import { StoreEmployeeComponent } from './store-employee.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTableModule } from 'ng-zorro-antd/table';

@NgModule({
  declarations: [StoreEmployeeComponent],
  imports: [
    CommonModule,
    NzTableModule,
    NzIconModule,
    NzButtonModule,
    NzDividerModule,
    StoreEmployeeRoutingModule,
  ],
})
export class StoreEmployeeModule {}
