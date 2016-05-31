import { Match } from './match';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { HeroService } from './hero.service';

export var Matches: Match[] = [
  { 'id': 1, 'player1': HeroService.getHero(1), 'points1': 0, 'player2': HeroService.getHero(2), 'points2': 0, 'isFinished': false },
];
