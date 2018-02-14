import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
interface AnimationState {
  className: string;
  id?: string | number;
}
@Injectable()
export class TaskAnimationService {
  private animationState = new Subject<AnimationState>();
  setAnimationState(state: AnimationState): void {
    this.animationState.next(state);
  }
  getAnimationState(): Observable<AnimationState> {
    return this.animationState;
  }
  setNone(): void {
    this.animationState.next({ className: undefined, id: undefined });
  }
}
