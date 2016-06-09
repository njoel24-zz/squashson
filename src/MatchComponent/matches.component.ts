import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

import { Match } from './match';
import { MatchService } from './match.service';

import { Player } from '../LeaderboardComponent/player';
import { PlayerService } from '../LeaderboardComponent/player.service';


@Component({
    selector: 'my-matches',
    templateUrl: 'src/MatchComponent/matches.component.html',
    styleUrls: ['src/LeaderboardComponent/leaderboard.component.css']
})

export class MatchesComponent implements OnInit {

    matches: Match[];

    constructor(
        private _router: Router,
        private _matchService: MatchService,
        private _playerService: PlayerService) {
    }

    setWinner(match: Match) {
        var winner = 0;
        
        if(match.isFinished === true){
            return;
        }

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
        this._playerService.updateLeaderboard(winner);
    }

    saveCookie(matches){
        var name = "matches";
        var cookie = [name, '=', JSON.stringify(matches), '; domain=.', window.location.host.toString(), '; path=/;'].join('');
        console.log(cookie)
        document.cookie = cookie;
    }

    ngOnInit() {
        this._matchService.getMatches()
            .then(
                matches => this.matches = matches
                );
    }
}
