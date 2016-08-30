import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

import { Match } from './match';
import { MatchService } from './match.service';
import { MatchConsts } from './match.consts';

import any = jasmine.any;

@Component({
    selector: 'my-matches',
    templateUrl: 'MatchComponent/matches.component.html'
})

export class MatchesComponent implements OnInit {

    matches: Match[];

    constructor(
        private _router: Router,
        private _matchService: MatchService,
        private _matchConsts: MatchConsts
        ) {
    }

    setWinner(match: Match) {
        var winner:number = 0;
        let points1:number = match.points1;
        let points2:number = match.points2;

        if ( points1 < this._matchConsts.matchPoints  && points2 < this._matchConsts.matchPoints) {
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
        //create an observable , emit setWinner, so the leaderboard can reset update itself
        this._matchService.setObservable(winner);

    }

    ngOnInit() {
        const content: any = localStorage.getItem("matches");
        if(content){
            this.matches = JSON.parse(content);
            var i: number;
            //emit matchStart, so the leaderboard can reset itself
            this._matchService.setObservable2(this._matchConsts.resetLeaderboard);

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
