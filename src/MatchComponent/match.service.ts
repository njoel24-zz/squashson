import { Injectable } from 'angular2/core';

import { Match } from './match';
import { Matches } from './mock-matches';

@Injectable()
export class MatchService {

  getMatches() {
    var result = document.cookie.match(new RegExp('matches' + '=([^;]+)'));
 	if(result && (result = JSON.parse(result[1])))
 	return result;
    return Promise.resolve(Matches);
  }

}
