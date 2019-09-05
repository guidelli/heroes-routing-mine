import { Injectable } from "@angular/core";
import { Hero } from "./hero";
import { Observable, of } from "rxjs";
import { HEROES } from "./mock-heroes";

@Injectable({
  providedIn: "root"
})
export class HeroService {
  constructor() {}

  getHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    return of(HEROES.find(h => h.id === id));
  }
}
