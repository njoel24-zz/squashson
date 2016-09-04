import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import { Player } from '../LeaderboardComponent/player';
import { LeaderBoardService } from './leaderboard.service';

@Component({
  selector: 'my-leaderboard',
  templateUrl: 'LeaderboardComponent/leaderboard.component.html'
})

export class LeaderboardComponent implements OnInit {
  players: Player[];

  constructor(
    private _router: Router,
    private _leaderBoardService: LeaderBoardService) {}

  getPlayers() {
    this._leaderBoardService.getPlayers().then(players => this.players = players);
  }

  ngOnInit() {
    this.getPlayers();
  }
}
