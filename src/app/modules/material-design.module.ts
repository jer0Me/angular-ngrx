import {NgModule} from '@angular/core';
import {MatButtonModule, MatCardModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule} from '@angular/material';
import {LayoutModule} from '@angular/cdk/layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ModuleWithProviders} from '@angular/core/src/metadata/ng_module';
import {Type} from '@angular/core/src/type';
import {CdkTableModule} from '@angular/cdk/table';

const modules: ModuleWithProviders[] | Array<Type<any> | any[]> = [
  BrowserAnimationsModule,
  LayoutModule,
  CdkTableModule,
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatCardModule
];

@NgModule({
  imports: modules,
  exports: modules,
  declarations: []
})
export class MaterialDesignModule {

}
