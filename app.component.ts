    import { Component } from 'angular2/core';
    import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
    import { MatchesComponent } from './MatchComponent/matches.component';
    import { LeaderboardComponent } from './LeaderboardComponent/leaderboard.component';
    import { LeaderBoardService } from './LeaderboardComponent/leaderboard.service';
    import { MatchService } from './MatchComponent/match.service';
    import { MatchConsts } from './MatchComponent/match.consts';

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
        styleUrls: ['app.component.css'],
        directives: [ROUTER_DIRECTIVES],
        providers: [
            ROUTER_PROVIDERS,
            LeaderBoardService,
            MatchService,
            MatchConsts //TODO: not the right place!
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
