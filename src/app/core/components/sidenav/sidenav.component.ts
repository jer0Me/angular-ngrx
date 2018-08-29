import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/internal/Observable';
import {select, Store} from '@ngrx/store';
import {AppState} from '../../reducers';
import * as fromSidebarSelectors from '../../selectors/sidebar.selector';
import * as fromSidebarActions from '../../actions/sidebar.action';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidenavComponent implements OnInit {

  showSidenav: Observable<boolean>;

  constructor(private store: Store<AppState>) {
    this.showSidenav = this.store.pipe(
      select(fromSidebarSelectors.getShowSidenav)
    );
  }

  onCloseSidenav(): void {
    this.store.dispatch(new fromSidebarActions.Close());
  }

  ngOnInit() {
  }

}
