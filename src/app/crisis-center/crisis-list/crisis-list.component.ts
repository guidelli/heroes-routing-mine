import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Crisis } from '../crisis';
import { CrisisService } from '../crisis.service';
import { switchMap } from 'rxjs/operators';
import { ParamMap, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-crisis-list',
  templateUrl: './crisis-list.component.html',
  styleUrls: ['./crisis-list.component.css']
})
export class CrisisListComponent implements OnInit {

  crises$: Observable<Crisis[]>;
  selectedId: number;


  constructor(private service: CrisisService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.crises$ = this.service.getCrises();
    this.route.paramMap.subscribe((paramMap: ParamMap) =>

      this.selectedId = +paramMap.get('id')
    );
  }

}
