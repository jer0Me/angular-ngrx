import {AfterViewInit, ChangeDetectorRef} from '@angular/core';

export class BaseComponent implements AfterViewInit {

  constructor(protected cd: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    this.cd.detach();
  }

  updateView(): void {
    this.cd.markForCheck();
  }
}
