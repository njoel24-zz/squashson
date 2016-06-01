import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

import { Match } from './match';
import { MatchService } from './match.service';

@Component({
  selector: 'my-matches',
  templateUrl: 'app/matches.component.html',
  styleUrls: ['app/leaderboard.component.css']
})
export class MatchesComponent implements OnInit {

  matches: Match[];

  constructor(
    private _router: Router,
    private _matchService: MatchService) {
  }

 setWinner(match: Match) {
 	 this.matches[match.id] = match;
  }

  ngOnInit() {
    this._matchService.getMatches()
      .then(
	     matches => this.matches = matches
	);
  }
}
