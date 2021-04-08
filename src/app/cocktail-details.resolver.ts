import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { Cocktail } from './cocktail.model';
import { CocktailService } from './cocktail.service';

@Injectable({
  providedIn: 'root'
})
export class CocktailDetailsResolver implements Resolve<Observable<Cocktail>> {
  constructor(private cocktailService: CocktailService) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<Cocktail> {
    const id = route.paramMap.get('id');

    return this.cocktailService.getById(id);
  }
}
