import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  CanDeactivate
} from "@angular/router";
import { Observable } from "rxjs";
import { CrisisDetailComponent } from "./crisis-center/crisis-detail/crisis-detail.component";

@Injectable({
  providedIn: "root"
})
export class CanDeactivateGuard
  implements CanDeactivate<CrisisDetailComponent> {
  canDeactivate(
    component: CrisisDetailComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ): boolean {
    console.log('# indeactivate');
    if(!component.editName || component.editName===component.crisis.name)return true;
    return window.confirm('Is it ok?'); 
  }
}
