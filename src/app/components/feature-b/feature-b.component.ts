import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Observable, merge } from 'rxjs';
import { switchMap, tap, map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-feature-b',
  templateUrl: './feature-b.component.html',
  styleUrls: ['./feature-b.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeatureBComponent implements OnInit {

  @Input() form: FormGroup;
  @Input() controlName: string;

  formControl: FormControl;
  allUsers$: Observable<string[]>;
  originalUsrs: string[];

  constructor(private _authService: AuthService) { }

  ngOnInit(): void {
    this.formControl = <FormControl>this.form.get(this.controlName);
    const controlChanged$ = this.formControl.valueChanges.pipe(
      startWith('')
    );
    this.originalUsrs = this._authService.getAuthUsers();
    this.allUsers$ = controlChanged$.pipe(
      map((value: any) => {
        if (!!value.type && value.type === 'initial_get') {
          return value;
        } else {
          if (this.originalUsrs) {
            return this.originalUsrs.filter(user => user.toUpperCase().lastIndexOf(value.toUpperCase()) > -1);
          } else {
            return [];
          }
        }
      })
    );
  }

}
