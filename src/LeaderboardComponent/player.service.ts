import { Injectable } from 'angular2/core';

import { Player } from './player';
import { PLAYERS } from './mock-players';

@Injectable()
export class PlayerService {
    getPlayers() {
        return Promise.resolve(PLAYERS);
    }

    updateLeaderboard(winner: number): void{
        PLAYERS[winner-1].points += 2 ;
    }

}

