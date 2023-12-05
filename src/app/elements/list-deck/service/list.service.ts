import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment.dev";

@Injectable()
export class ListService {

  constructor( private http: HttpClient) {}

}
