import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

import { Match } from './match';
import { MatchService } from './match.service';
import { MatchConsts } from './match.consts';


@Component({
    selector: 'my-matches',
    templateUrl: 'MatchComponent/matches.component.html'
})

export class MatchesComponent implements OnInit {

    matches: Match[];

    constructor(
        private _router: Router,
        private _matchService: MatchService,
        ) {
    }

    setWinner(match: Match) {
        var winner = 0;
        let points1 = parseInt(match.points1);
        let points2 = parseInt(match.points2);

        if ( points1 < MatchConsts.matchPoints  && points2 < MatchConsts.matchPoints) {
            return;
        }

        if (points1 === points2) {
            return;
        }

        if (points1 > points2) {
            winner = match.idPlayer1;
        } else if (points1 < points2) {
            winner = match.idPlayer2;
        }

        match.isFinished = true;
        localStorage.setItem("matches",JSON.stringify(this.matches));
        //emit setWinner, so the leaderboard can reset update itself
    }

    ngOnInit() {
        const content: any = localStorage.getItem("matches");
        if(content){
            this.matches = JSON.parse(content);
            var i: number;
            //emit matchStart, so the leaderboard can reset itself
            for(i=0; i<(this.matches.length-1);i++){
                this.setWinner(this.matches[i]);
            }
        }
        else {
            this._matchService.getMatches().then(
                matches => this.matches = matches
                );
        }
    }
}
