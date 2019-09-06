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



  crisis: Crisis;
  editName: string;


  constructor(private service: CrisisService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.data.subscribe((data: {crisis: Crisis})=>{
      this.crisis=data.crisis;
      this.editName=data.crisis.name;
    });
 }

  gotoCrises() {
    this.router.navigate(['../', { id: this.crisis.id, foo: 'bar' }], { relativeTo: this.route });
  }

  save(){
    if(this.editName){
      this.crisis.name=this.editName;
      this.gotoCrises();
    }
  }

  cancel(){
    this.gotoCrises();
  }

}
