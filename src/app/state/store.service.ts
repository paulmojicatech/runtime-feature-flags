import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { User, StateStore } from './models/state.interface';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private currentState: StateStore = {
    user: {
      name: null,
      featureFlags: []
    }
  };

  private currentUser: User;

  private currentStateSubject$: Subject<StateStore> = new Subject<StateStore>(); 
  constructor() {
    this.currentStateSubject$.next(this.currentState);
   }

  getState(): Observable<StateStore> {
    return this.currentStateSubject$.pipe(
      map((state: StateStore) => {
        console.log('USER STATE CHANGED', state);
        return state;
      })
    );
  }

  getCurrentUser(): User {
    return this.currentUser;
  }

  updateState(newState: StateStore): void {
    let updatedState = Object.assign(this.currentState);
    Object.keys(newState).forEach(key => {
      switch (key) {
        case 'user':
          const user = newState[key];
          this.currentUser = user; // done because no memoization
          updatedState = {...updatedState, user};
          break;
        default:
          break;
      }
    });
    
    this.currentStateSubject$.next(updatedState);
    
  }

}
