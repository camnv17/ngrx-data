import { Observable } from 'rxjs';
import { CoreService } from 'src/app/@services/core/core.service';
import { ICoreApi } from './interface.api';

export class CoreApiImp<T> implements ICoreApi<T> {
  constructor(private http: CoreService, private url: string) {}

  GetAll(): Observable<T[]> {
    return this.http.getAll<T>(this.url);
  }

  GetOne(id: string): Observable<T> {
    throw new Error('Method not implemented.');
  }
  PostOne(model: T): Observable<T> {
    throw new Error('Method not implemented.');
  }
  UpdateOne(model: T): Observable<T> {
    throw new Error('Method not implemented.');
  }
  DeleteOne(id: string): Observable<T> {
    return this.http.deleteOne<T>(this.url, id);
  }
}
