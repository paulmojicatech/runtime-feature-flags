import { Injectable, OnInit } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { StoreService } from '../state/store.service';
import { User } from '../state/models/state.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements OnInit, CanActivate {

  userToken: User;

  constructor(private _stateStore: StoreService, private _router: Router) {
  }


  ngOnInit(): void {
    
  }
  canActivate(): boolean {
    this._stateStore.getState().subscribe(state => {
      this.userToken = state.user;
      this.checkLogin();
    });
    if (!!this.userToken && !!this.userToken.name) {
      return true;
    } else {
      this.checkLogin();
    }
    return !!this.userToken && !!this.userToken.name;
    
  }

  checkLogin(): boolean {
    if (!!this.userToken && !!this.userToken.name) {
      this._router.navigateByUrl('');
      return true;
    } else {
      this._router.navigateByUrl('login');
      return false;
    }
  }
}
