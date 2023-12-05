import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment.dev";

@Injectable()
export class AllCardsService {

  constructor( private http: HttpClient) {}

  getAllCards(): Observable<any> {
    return this.http.get<any>(environment.host_suffix_cards);
  }
}
