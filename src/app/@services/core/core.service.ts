import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { delay } from 'rxjs/operators';

const DELAY = 2000;

@Injectable({
  providedIn: 'root',
})
export class CoreService {
  constructor(private http: HttpClient) {}

  getAll<T>(url: string) {
    return this.http.get<T[]>(url).pipe(delay(DELAY));
  }

  getOne(url: string, id: string) {
    const url_find = `${url}/${id}`;

    return this.http.get(url_find);
  }

  postOne<T>(url: string, model: T) {
    return this.http.post(url, model);
  }

  putOne<T extends { id: string }>(url: string, model: T) {
    const url_edit = `${url}/${model.id}`;

    return this.http.put(url_edit, model);
  }

  deleteOne<T>(url: string, id: string) {
    const url_delete = `${url}/${id}`;

    return this.http.delete<T>(url_delete).pipe(delay(DELAY));
  }
}
