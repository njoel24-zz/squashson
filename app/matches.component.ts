import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';
import { Match } from './match';
import { MatchService } from './match.service';

@Component({
  selector: 'my-matches',
  templateUrl: 'app/matches.component.html',
  styleUrls: ['app/matches.component.css']
})
export class MatchesComponent implements OnInit {

  matches: Match[] = [];

  constructor(
    private _router: Router,
    private _heroService: HeroService,
    private _matchService: MatchService) {
  }

  ngOnInit() {
    this._matchService.getMatches()
      .then(heroes => this.matches = heroes.slice(1,5));
  }

  gotoDetail(hero: Hero) {
    let link = ['HeroDetail', { id: hero.id }];
    this._router.navigate(link);
  }
}
