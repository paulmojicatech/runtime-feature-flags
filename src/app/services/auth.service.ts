import { Injectable } from '@angular/core';
import { StoreService } from '../state/store.service';
import { User } from '../state/models/state.interface';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _store: StoreService) { }

  authenticate(userLogin: string): void {
    let user: User;
    if (userLogin === 'old') {
      user = { name: 'Boring User', featureFlags: [] };
      
    } else if (userLogin === 'featureA') {
      user = { name: 'The New Stuff : Feature A', featureFlags: ['featureA'] };
      
    } else if (userLogin === 'featureB') {
      user = { name: 'The New Stuff : Feature B', featureFlags: ['featureB'] };
      
    } else if (userLogin == 'allFeatures') {
      user = { name: 'Give me all the things', featureFlags: ['featureA', 'featureB']};
    }
    this._store.updateState({user});
  }

  getAuthUsers(): Observable<string[]> {
    return of([ 'old', 'featureA', 'featureB', 'allFeatures' ]);
  }
}
