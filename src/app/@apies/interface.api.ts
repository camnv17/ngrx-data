import { Observable } from 'rxjs';

export declare interface ICoreApi<T> {
  GetAll(): Observable<T[]>;

  GetOne(id: string): Observable<T>;

  PostOne(model: T): Observable<T>;

  UpdateOne(model: T): Observable<T>;

  DeleteOne(id: string): Observable<T>;
}
