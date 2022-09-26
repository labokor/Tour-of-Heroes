import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { DashboardModule } from '@app/dashboard/dashboard.module';
import { TranslocoRootModule } from './transloco-root.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DashboardModule,
    TranslocoRootModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
