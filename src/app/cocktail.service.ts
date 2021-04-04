import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {
  static baseUrl = 'https://www.thecocktaildb.com/api/json/v1/1/';

  constructor(private http: HttpClient) { }

  listByFirstLetter(letter: string): Observable<any> {
    const url = `${CocktailService.baseUrl}/search.php?f=${letter}`;
    return this.http.get(url);
  }
}
