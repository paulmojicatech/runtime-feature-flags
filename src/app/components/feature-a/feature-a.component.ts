import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-feature-a',
  templateUrl: './feature-a.component.html',
  styleUrls: ['./feature-a.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeatureAComponent implements OnInit {

  @Input() form: FormGroup;
  @Input() controlName: string;

  formControl: FormControl;

  constructor() { }

  ngOnInit(): void {
    this.formControl = <FormControl>this.form.get(this.controlName);
  }

}
