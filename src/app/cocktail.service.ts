import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {
  static baseUrl = 'https://www.thecocktaildb.com/api/json/v1/1';

  constructor(private http: HttpClient) { }

  listByFirstLetter(letter: string): Observable<any> {
    const url = `${CocktailService.baseUrl}/search.php?f=${letter}`;
    return this.http.get(url);
  }

  getById(id: string): Observable<any> {
    const url = `${CocktailService.baseUrl}/lookup.php?i=${id}`;
    return this.http.get(url)
      .pipe(map(result => (<any>result)?.drinks[0] || {}))
  }
}
