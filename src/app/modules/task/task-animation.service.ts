import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TaskAnimationService {
  private animationState = new Subject<string>();
  setAnimationState(state: string): void {
    this.animationState.next(state);
  }
  getAnimationState(): Observable<string> {
    return this.animationState;
  }
}
