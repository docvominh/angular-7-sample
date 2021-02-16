import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Beer} from "./beer";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BeerService {
  readonly serverPath = 'localhost:8099';

  constructor(private http: HttpClient) {
  }

  getBeers(size): Observable<Beer[]> {
    let params = new HttpParams().set("size", size);
    return this.http.get<Beer[]>(this.serverPath + '/beer/finds', {params: params});
  }
}
