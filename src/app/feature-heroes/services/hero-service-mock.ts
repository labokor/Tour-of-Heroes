import { Observable, of } from 'rxjs';
import { Hero } from '../models/hero';

const heroes: Hero[] = [
  {
    id: 1,
    name: 'Tata',
  },
  {
    id: 2,
    name: 'Mama',
  },
  {
    id: 3,
    name: 'Dom',
  },
  {
    id: 4,
    name: 'Erik',
  },
];

export class HeroServiceMock {
  getHeroes(): Observable<Hero[]> {
    return of(heroes);
  }

  getHero(id: number): Observable<Hero> {
    return of(heroes[0]);
  }
}
