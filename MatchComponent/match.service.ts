import { Injectable } from 'angular2/core';
import { Matches } from './mock-matches';
import { PlayerService } from '../LeaderboardComponent/player.service';
import { MatchConsts } from './match.consts';

@Injectable()
export class MatchService {

    constructor(private _playerService: PlayerService,private _matchConsts: MatchConsts){
    }

    getMatches() {
        return Promise.resolve(Matches);
    }
}
