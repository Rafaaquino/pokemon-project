import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable()
export class CadsService {

  private cads$ = new BehaviorSubject<any>([]);

  constructor() {

  }

  setCards(cards: any): void {
    this.cads$.next(cards);
  }

  getCards(): Observable<any> {
    return this.cads$.asObservable();
  }

}
