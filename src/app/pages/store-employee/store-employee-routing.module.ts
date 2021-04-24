import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreEmployeeComponent } from './store-employee.component';

const routes: Routes = [{ path: '', component: StoreEmployeeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreEmployeeRoutingModule { }
