import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {select, Store} from '@ngrx/store';
import {AppState} from '../../reducers';
import {getShowSidenav} from '../../reducers/layout.reducer';
import * as LayoutActions from '../../actions/layout.action';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidenavComponent implements OnInit {

  showSidenav: Observable<boolean>;

  constructor(private store: Store<AppState>) {
    this.showSidenav = this.store.pipe(select(getShowSidenav));
  }

  onCloseSidenav(): void {
    this.store.dispatch(new LayoutActions.CloseSidenav());
  }

  ngOnInit() {
  }

}
