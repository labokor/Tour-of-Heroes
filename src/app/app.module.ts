import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FeatureHeroesModule } from './feature-heroes/feature-heroes.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FeatureHeroesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
