import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';
import { HeroSearchComponent } from './components/hero-search/hero-search.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeroesHomeComponent } from './containers/home/heroes-home.component';
import { MessagesComponent } from './components/messages/messages.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroesComponent } from './components/heroes/heroes.component';
// import { HeroesComponent } from '@app/feature-heroes/components/heroes/heroes.component'; // igy is lehet --> tconfig.json

// const routes: Routes = [
//   { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
//   { path: 'dashboard', component: DashboardComponent },
//   { path: 'detail/:id', component: HeroDetailComponent },
//   { path: 'heroes', component: HeroesComponent },
// ];

@NgModule({
  declarations: [
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    HeroesHomeComponent,
    DashboardComponent,
    HeroSearchComponent,
  ],
  imports: [
    // RouterModule.forChild(routes), // -- or use HeroesRoutingModule
    HeroesRoutingModule,
    FormsModule,
    CommonModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
    }),
  ],
  providers: [],
  exports: [HeroesHomeComponent],
})
export class FeatureHeroesModule {}
