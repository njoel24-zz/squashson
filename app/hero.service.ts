import { Injectable } from 'angular2/core';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {
    getHeroes() {
        return Promise.resolve(HEROES);
    }

    updateLeaderboard(winner: number): void{
    	HEROES[winner-1].points += 2 ;
    }

}

