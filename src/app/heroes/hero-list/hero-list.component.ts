import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { switchMap } from 'rxjs/operators';
import { ParamMap, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {

  heroes$: Observable<Hero[]>;
  selectedId: number;


  constructor(private service: HeroService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.heroes$ = this.service.getHeroes();
    this.route.paramMap.subscribe((paramMap: ParamMap) =>

      this.selectedId = +paramMap.get('id')
    );
  }

}
