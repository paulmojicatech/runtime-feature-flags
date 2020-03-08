import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { StoreService } from 'src/app/state/store.service';
import { Router } from '@angular/router';
import { User } from 'src/app/state/models/state.interface';
import { AuthService } from 'src/app/services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  allUsers$: Observable<string[]>  

  constructor(private _fb: FormBuilder, private _authService: AuthService, private _router: Router) { }

  ngOnInit(): void {
    this.form = this._fb.group({
      'Login': new FormControl()
    });

    this.allUsers$ = this._authService.getAuthUsers();
  }

  login(): void {
    this._authService.authenticate(this.form.get('Login').value);
    this._router.navigateByUrl('home');
  }

}
