import { Injectable } from 'angular2/core';

import { Match } from './match';
import { Matches } from './mock-matches';

@Injectable()
export class MatchService {
  getMatches() {
    return Promise.resolve(Matches);
  }

  getHeroesSlowly() {
    return new Promise<Match[]>(resolve =>
      setTimeout(()=>resolve(Matches), 2000) // 2 seconds
    );
  }

  getMatch(id: number) {
    return Promise.resolve(Matches).then(
      matches => matches.filter(match => match.id === id)[0]
    );
  }
}
