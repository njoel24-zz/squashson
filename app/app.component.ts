import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import { MatchesComponent } from './matches.component';
import { LeaderboardComponent } from './leaderboard.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';

@Component({
  selector: 'squashsson-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a [routerLink]="['Matches']">Matches</a>
      <a [routerLink]="['Leaderboard']">Leaderboard</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['app/app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS,
    HeroService
  ]
})
@RouteConfig([
  {
    path: '/matches',
    name: 'Matches',
    component: MatchesComponent,
    useAsDefault: true
  },
  {
    path: '/detail/:id',
    name: 'HeroDetail',
    component: HeroDetailComponent
  },
  {
    path: '/leaderboard',
    name: 'Leaderboard',
    component: LeaderboardComponent
  }
])
export class AppComponent {
  title = 'Squashsson!';
}
