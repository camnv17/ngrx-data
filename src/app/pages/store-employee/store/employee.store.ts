import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { ModelEmployee } from 'src/app/@models/model.employee';
import { EmployeeService } from 'src/app/@services/employee.service';

export interface EmployeeState {
  loading: boolean;
  entities: ModelEmployee[];
}

@Injectable()
export class EmployeeStore extends ComponentStore<EmployeeState> {
  constructor(private employeeService: EmployeeService) {
    super({ loading: false, entities: [] });
  }

  readonly employees$: Observable<ModelEmployee[]> = this.select(
    (state) => state.entities
  );

  readonly loading$: Observable<boolean> = this.select(
    (state) => state.loading
  );

  readonly setLoading = this.updater((state) => ({
    ...state,
    loading: true,
  }));

  readonly setEmployees = this.updater((state, list: ModelEmployee[]) => ({
    ...state,
    entities: state.entities.concat(list),
    loading: false,
  }));

  readonly deleteEmployee = this.updater((state, id: string) => ({
    ...state,
    entities: state.entities.filter((item) => item.id !== id),
    loading: false,
  }));

  getAll$ = this.effect((getAll$) =>
    getAll$.pipe(
      tap(() => this.setLoading()),
      switchMap(() =>
        this.employeeService.GetAll().pipe(map((res) => this.setEmployees(res)))
      )
    )
  );

  deleteOne$ = this.effect((empoyeeId$: Observable<string>) => {
    return empoyeeId$.pipe(
      tap(() => this.setLoading()),
      switchMap((id) =>
        this.employeeService
          .DeleteOne(id)
          .pipe(map(() => this.deleteEmployee(id)))
      )
    );
  });
}
