import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreCounterComponent } from './store-counter.component';

const routes: Routes = [{ path: '', component: StoreCounterComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreCounterRoutingModule { }
