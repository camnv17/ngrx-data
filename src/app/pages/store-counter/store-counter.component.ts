import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CounterStore } from './store/counter.store';

@Component({
  selector: 'app-store-counter',
  templateUrl: './store-counter.component.html',
  styleUrls: ['./store-counter.component.scss'],
  providers: [CounterStore],
})
export class StoreCounterComponent implements OnInit {
  count$!: Observable<number>;

  constructor(private counterStore: CounterStore) {
    this.count$ = this.counterStore.count$;
  }

  ngOnInit(): void {}

  increment() {
    this.counterStore.add();
  }
}
