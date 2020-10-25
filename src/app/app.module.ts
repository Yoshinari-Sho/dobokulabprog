import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseComponent } from './base/base.component';
import { LotationalslipComponent } from './lotationalslip/lotationalslip.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { LiquefactionComponent } from './liquefaction/liquefaction.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
    LotationalslipComponent,
    LandingpageComponent,
    LiquefactionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
