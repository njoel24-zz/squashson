import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import { Match } from './match';
import { MatchService } from './match.service';
import { PlayerService } from '../LeaderboardComponent/player.service';
import { MatchConsts } from './match.consts';
import Rx from 'rxjs/Rx';
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
        private _matchConsts: MatchConsts,
        private _playerService:PlayerService
        ) {
    }

    restartMatches(){
        localStorage.clear();
        this.setEnvironment();
    }

    setWinner(match: Match, setObservable:boolean = true) {
        var winner:number = 0;
        let points1:number = parseInt(match.points1);
        let points2:number = parseInt(match.points2);

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
       if(setObservable) {
           Rx.Observable.of(winner).subscribe((value: any) => {
               console.log("new value from Observable:" + value);
               switch (value) {
                   case this._matchConsts.resetLeaderboard:
                       this._playerService.resetLeaderboard();
                       break;
                   default:
                       this._playerService.updateLeaderboard(value);
                       break;

               }
           });
       }
    }

    ngOnInit() {
        this.setEnvironment();
    }

    setEnvironment(){
        const content: any = localStorage.getItem("matches");
        if(content){
            this.matches = JSON.parse(content);
            var i: number;
            for(i=0; i<(this.matches.length-1);i++){
                this.setWinner(this.matches[i],false);
            }
        }
        else {
            this._matchService.getMatches().then(
                matches => this.matches = matches
            );
        }
    }
}
