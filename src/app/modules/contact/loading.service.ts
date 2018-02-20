import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/distinctUntilChanged';

@Injectable()
export class LoadingService {
  private loading = new BehaviorSubject(false);
  setLoading(value: boolean): void {
    this.loading.next(value);
  }
  getLoading(): Observable<boolean> {
    return this.loading.distinctUntilChanged();
  }
  show(time: number = 0) {
    this.setLoading(true);
    setTimeout(() => this.setLoading(false), time);
  }

}
