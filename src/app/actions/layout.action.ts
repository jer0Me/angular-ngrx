import {Action} from '@ngrx/store';

export enum LayoutActionType {
  OpenSidenav = '[Layout] Open sidenav',
  CloseSidenav = '[Layout] Close sidenav'
}

export class OpenSidenav implements Action {
  readonly type: string = LayoutActionType.OpenSidenav;
  constructor() {}
}

export class CloseSidenav implements Action {
  readonly type: string = LayoutActionType.CloseSidenav;
  constructor() {}
}

export type LayoutActions = OpenSidenav | CloseSidenav;
