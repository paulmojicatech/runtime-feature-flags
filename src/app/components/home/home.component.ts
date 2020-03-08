import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User, StateStore } from 'src/app/state/models/state.interface';
import { StoreService } from 'src/app/state/store.service';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  user: User;

  constructor(private _stateStoreSvc: StoreService) { }

  ngOnInit(): void {
    this.user = this._stateStoreSvc.getCurrentUser();

  }

}
