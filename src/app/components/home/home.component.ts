import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User, StateStore } from 'src/app/state/models/state.interface';
import { StoreService } from 'src/app/state/store.service';
import { map } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  user: User;
  form: FormGroup;

  constructor(private _stateStoreSvc: StoreService, 
    private _router: Router,
    private _fb: FormBuilder) { }

  ngOnInit(): void {
    this.user = this._stateStoreSvc.getCurrentUser();
    this.form = this._fb.group({
      'Plain Text': new FormControl(),
      'Feature A': new FormControl(),
      'Feature B': new FormControl()
    });
  }

  logout(): void {
    const user = null;
    this._stateStoreSvc.updateState({user});
    this._router.navigate(['']);
  }

  hasFeatureFlag(feature: string): boolean {
    return this.user.featureFlags.findIndex(flag => flag === feature) > -1;
  }

}
