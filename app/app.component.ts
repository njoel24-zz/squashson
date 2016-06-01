import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import { MatchesComponent } from './matches.component';
import { LeaderboardComponent } from './leaderboard.component';
import { HeroService } from './hero.service';
import { MatchService } from './match.service';

@Component({
    selector: 'squashson-app',
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
        HeroService,
        MatchService
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
        path: '/leaderboard',
        name: 'Leaderboard',
        component: LeaderboardComponent
    }
])
export class AppComponent {
    title = 'Squashson!';
}
