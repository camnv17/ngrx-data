import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'welcome',
    loadChildren: () =>
      import('./pages/welcome/welcome.module').then((m) => m.WelcomeModule),
  },
  {
    path: 'employee',
    loadChildren: () =>
      import('./pages/employee/employee.module').then((m) => m.EmployeeModule),
  },
  {
    path: 'store-employee',
    loadChildren: () =>
      import('./pages/store-employee/store-employee.module').then(
        (m) => m.StoreEmployeeModule
      ),
  },

  { path: '', pathMatch: 'full', redirectTo: '/employee' },
  { path: 'store-counter', loadChildren: () => import('./pages/store-counter/store-counter.module').then(m => m.StoreCounterModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
