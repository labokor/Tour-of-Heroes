import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

// const routes: Routes = [
//   { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
//   { path: 'dashboard', component: DashboardComponent },
//   { path: 'detail/:id', component: HeroDetailComponent },
//   { path: 'heroes', component: HeroesComponent },
// ];

const lazyLoadingRoutes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./feature-heroes/feature-heroes.module').then(
        (module) => module.FeatureHeroesModule
      ),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
];

@NgModule({
  // imports: [RouterModule.forRoot(routes)],
  imports: [
    RouterModule.forRoot(lazyLoadingRoutes, {
      useHash: true,
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
