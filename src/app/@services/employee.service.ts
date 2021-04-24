import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CoreApiImp } from '../@apies/core.api';
import { IEmployee } from '../@interfaces/interface.employee';
import { ModelEmployee } from '../@models/model.employee';
import { CoreService } from './core/core.service';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService
  extends CoreApiImp<ModelEmployee>
  implements IEmployee {
  constructor(http: CoreService) {
    super(http, 'http://localhost:3000/employee');
  }

  DeleteMany(ids: string[]): Observable<ModelEmployee[]> {
    throw new Error('Method not implemented.');
  }
}
