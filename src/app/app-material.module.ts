import {NgModule} from '@angular/core';/* MATERIAL */
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LayoutModule} from '@angular/cdk/layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatSelectModule} from "@angular/material/select";

@NgModule({
  exports: [BrowserAnimationsModule, LayoutModule,
    MatToolbarModule, MatButtonModule, MatCheckboxModule, MatSidenavModule, MatProgressSpinnerModule, MatSelectModule, MatIconModule, MatListModule, MatTableModule, MatPaginatorModule, MatTooltipModule,]
})
export class AppMaterialModule {
}
