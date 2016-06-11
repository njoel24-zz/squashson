import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';


import { Match } from './match';
import { MatchService } from './match.service';

import { Player } from '../LeaderboardComponent/player';
import { PlayerService } from '../LeaderboardComponent/player.service';


@Component({
    selector: 'my-matches',
    templateUrl: 'MatchComponent/matches.component.html'
})

export class MatchesComponent implements OnInit {

    matches: Match[];

    constructor(
        private _router: Router,
        private _matchService: MatchService,
        private _playerService: PlayerService
        ) {
    }

    setWinner(match: Match) {
        var winner = 0;
        
        
        if (match.points1 < 21  && match.points2 < 21) {
            return;
        }

        if (match.points1 === match.points2) {
            return;
        }

        if (match.points1 > match.points2) {
            winner = match.idPlayer1;
        } else if (match.points1 < match.points2) {
            winner = match.idPlayer2;
        }

        match.isFinished = true;
        localStorage.setItem("matches",JSON.stringify(this.matches));
        this._playerService.updateLeaderboard(winner);

    }

    ngOnInit() {
        const content: any = localStorage.getItem("matches");
        if(content !== null){
            this.matches = JSON.parse(content);
            var i: number;
            this._playerService.resetLeaderboard();            
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
