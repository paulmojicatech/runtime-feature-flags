import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { StoreService } from 'src/app/state/store.service';
import { Router } from '@angular/router';
import { User } from 'src/app/state/models/state.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(private _fb: FormBuilder, private _store: StoreService, private _router: Router) { }

  ngOnInit(): void {
    this.form = this._fb.group({
      'Login': new FormControl()
    });
  }

  login(): void {
    const user: User = { name: this.form.get('Login').value, featureFlags: [] };
    this._store.updateState({ user });
    this._router.navigateByUrl('');
  }

}
