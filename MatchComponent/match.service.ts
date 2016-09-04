import { Injectable } from 'angular2/core';
import { Matches } from './mock-matches';
import { MatchConsts } from './match.consts';

@Injectable()
export class MatchService {

    constructor(private _matchConsts: MatchConsts){
    }

    getMatches() {
        return Promise.resolve(Matches);
    }
}
