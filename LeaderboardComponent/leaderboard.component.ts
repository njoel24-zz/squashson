import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

import { Player } from '../LeaderboardComponent/player';
import { PlayerService } from '../LeaderboardComponent/player.service';
import {MatchesComponent} from "../MatchComponent/matches.component";
import { MatchConsts } from '../MatchComponent/match.consts';

@Component({
  selector: 'my-leaderboard',
  templateUrl: 'LeaderboardComponent/leaderboard.component.html'
})
export class LeaderboardComponent implements OnInit {
  players: Player[];

  constructor(
    private _router: Router,
    private _playerService: PlayerService,
    private _matchComponents: MatchesComponent,
    private _matchConsts: MatchConsts) {
        _matchComponents.observableData.subscribe(
          value => {
              switch(value){
                  case this._matchConsts.resetLeaderboard:
                      this._playerService.resetLeaderboard();
                      break;
                  default:
                      this._playerService.updateLeaderboard(value);
                      break;
              }
          },
            error => console.log(error),
            () => console.log("nothing to send")
      );
    }

  getPlayers() {
    this._playerService.getPlayers().then(players => this.players = players);
  }

  ngOnInit() {
    this.getPlayers();
  }

}
