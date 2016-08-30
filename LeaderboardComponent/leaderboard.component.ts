import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

import { Player } from '../LeaderboardComponent/player';
import { PlayerService } from '../LeaderboardComponent/player.service';
import { MatchConsts } from '../MatchComponent/match.consts';
import { MatchService } from '../MatchComponent/match.service';

@Component({
  selector: 'my-leaderboard',
  templateUrl: 'LeaderboardComponent/leaderboard.component.html'
})
export class LeaderboardComponent implements OnInit {
  players: Player[];

  constructor(
    private _router: Router,
    private _playerService: PlayerService,
    private _matchService: MatchService,
    private _matchConsts: MatchConsts) {
      if(_matchService.observableData) {
          _matchService.observableData.subscribe(
              value => {
                  console.log(value);
                  switch (value) {
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
    }

  getPlayers() {
    this._playerService.getPlayers().then(players => this.players = players);
  }

  ngOnInit() {
    this.getPlayers();
  }

}
