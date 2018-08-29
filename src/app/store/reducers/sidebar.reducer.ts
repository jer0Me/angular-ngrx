import * as fromSidebarActions from '../actions/sidebar.action';

export interface State {
  showSidenav: boolean;
}

export const initialState: State = {
  showSidenav: false
};

export function reducer(sidebarState: State = initialState, action: fromSidebarActions.SidebarAction): State {
  switch (action.type) {
    case fromSidebarActions.OPEN: {
      return {
        ...sidebarState,
        showSidenav: true
      };
    }
    case fromSidebarActions.CLOSE: {
      return {
        ...sidebarState,
        showSidenav: false
      };
    }
    default: {
      return sidebarState;
    }
  }
}



