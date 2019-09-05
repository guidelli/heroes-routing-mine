import { Injectable } from "@angular/core";
import { Crisis } from "./crisis";
import { Observable, of } from "rxjs";
import { CRISES } from "./mock-crises";

@Injectable({
  providedIn: "root"
})
export class CrisisService {
  constructor() {}

  getCrises(): Observable<Crisis[]> {
    return of(CRISES);
  }

  getCrisis(id: number): Observable<Crisis> {
    return of(CRISES.find(h => h.id === id));
  }
}
