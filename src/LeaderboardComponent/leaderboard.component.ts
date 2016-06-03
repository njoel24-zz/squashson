import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

import { Player } from '../LeaderboardComponent/player';
import { PlayerService } from '../LeaderboardComponent/player.service';

@Component({
  selector: 'my-leaderboard',
  templateUrl: 'src/LeaderboardComponent/leaderboard.component.html',
  styleUrls: ['src/LeaderboardComponent/leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {
  players: Player[];

  constructor(
    private _router: Router,
    private _playerService: PlayerService) { }

  getHeroes() {
    this._playerService.getPlayers().then(players => this.players = players);
  }
  
  updateLeaderboard(){
      
  }

  ngOnInit() {
    this.getHeroes();
  }

}
