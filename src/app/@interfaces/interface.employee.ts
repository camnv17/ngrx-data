import { Observable } from 'rxjs';
import { ModelEmployee } from '../@models/model.employee';

export declare interface IEmployee {
  DeleteMany(ids: string[]): Observable<ModelEmployee[]>;
}
