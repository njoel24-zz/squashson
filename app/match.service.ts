import { Injectable } from 'angular2/core';

import { Match } from './match';
import { Matches } from './mock-matches';

@Injectable()
export class MatchService {

  getMatches() {
    console.log(Promise.resolve(Matches));
    return Promise.resolve(Matches);
  }

}
