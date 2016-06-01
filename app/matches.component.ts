import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

import { Match } from './match';
import { MatchService } from './match.service';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-matches',
  templateUrl: 'app/matches.component.html',
  styleUrls: ['app/leaderboard.component.css']
})
export class MatchesComponent implements OnInit {

  matches: Match[];

  constructor(
    private _router: Router,
    private _matchService: MatchService,
    private _heroService: HeroService) {
  }

 setWinner(match: Match) {
 	 var winner = 0;
   if(match.points1 > match.points2 ){
      winner = match.idPlayer1;
   }else{
      winner = match.idPlayer2;
   }
   this._heroService.updateLeaderboard(winner);
  }

  ngOnInit() {
    this._matchService.getMatches()
      .then(
	     matches => this.matches = matches
	);
  }
}
