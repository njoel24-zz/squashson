import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-leaderboard',
  templateUrl: 'app/leaderboard.component.html',
  styleUrls:  ['app/leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {
  heroes: Hero[];

  constructor(
    private _router: Router,
    private _heroService: HeroService) { }

  getHeroes() {
    this._heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
  
  updateLeaderboard(){
      
  }

  ngOnInit() {
    this.getHeroes();
  }

}
