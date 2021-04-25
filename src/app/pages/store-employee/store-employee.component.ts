import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ModelEmployee } from 'src/app/@models/model.employee';
import { EmployeeStore } from './store/employee.store';

@Component({
  selector: 'app-store-employee',
  templateUrl: './store-employee.component.html',
  styleUrls: ['./store-employee.component.scss'],
  providers: [EmployeeStore],
})
export class StoreEmployeeComponent implements OnInit {
  employee$!: Observable<ModelEmployee[]>;
  loading$!: Observable<boolean>;

  constructor(private readonly store: EmployeeStore) {
    this.employee$ = this.store.employees$;
    this.loading$ = this.store.loading$;
  }

  ngOnInit(): void {
    this.store.setState({ entities: [], loading: false });

    this.store.getAll$();
  }

  deleteById(id: string) {
    this.store.deleteOne$(id);
  }
}
