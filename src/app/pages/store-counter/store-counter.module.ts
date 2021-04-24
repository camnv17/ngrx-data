import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreCounterRoutingModule } from './store-counter-routing.module';
import { StoreCounterComponent } from './store-counter.component';
import { NzButtonModule } from 'ng-zorro-antd/button';

@NgModule({
  declarations: [StoreCounterComponent],
  imports: [CommonModule, NzButtonModule, StoreCounterRoutingModule],
})
export class StoreCounterModule {}
