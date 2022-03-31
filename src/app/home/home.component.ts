import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { RootState } from '../store';
import { Observable } from 'rxjs';
import { selectIsLoaded } from './store/selectors/users.selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  isLoaded$: Observable<boolean>;

  constructor(private store: Store<RootState>) {
    this.isLoaded$ = store.select(selectIsLoaded);
  }


}
