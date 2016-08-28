import { Injectable } from 'angular2/core';
import { Matches } from './mock-matches';

@Injectable()
export class MatchService {

  getMatches() {
    return Promise.resolve(Matches);
  }

}
