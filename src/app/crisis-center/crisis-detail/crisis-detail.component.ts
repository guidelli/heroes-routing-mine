import { Component, OnInit } from '@angular/core';
import { CrisisService } from '../crisis.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { Crisis } from '../crisis';

import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-crisis-detail',
  templateUrl: './crisis-detail.component.html',
  styleUrls: ['./crisis-detail.component.css']
})
export class CrisisDetailComponent implements OnInit {

  crisis$: Observable<Crisis>;


  constructor(private service: CrisisService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {

    this.crisis$ = this.route.paramMap.pipe(switchMap((paramMap: ParamMap) =>

      this.service.getCrisis(+paramMap.get('id'))
    ));
  }

  gotoCrises(idCrisis: number) {
    this.router.navigate(['/crises', { id: idCrisis, foo: 'bar' }]);
  }

}
