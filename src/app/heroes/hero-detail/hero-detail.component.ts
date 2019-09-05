import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { Hero } from '../hero';

import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  hero$: Observable<Hero>;

  constructor(private service: HeroService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {

    this.hero$ = this.route.paramMap.pipe(switchMap((paramMap: ParamMap) =>
      this.service.getHero(+paramMap.get('id'))
    ));
  }

  gotoHeroes(idHero: number) {
    this.router.navigate(['/heroes', { id: idHero, foo: 'bar' }]);
  }

}
