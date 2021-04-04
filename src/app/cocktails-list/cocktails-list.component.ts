import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CocktailService } from '../cocktail.service';

@Component({
  selector: 'app-cocktails-list',
  templateUrl: './cocktails-list.component.html',
  styleUrls: ['./cocktails-list.component.css']
})
export class CocktailsListComponent implements OnInit {
  cocktails$: Observable<any[]>;

  constructor(private cocktailService: CocktailService) { }

  ngOnInit(): void {
    this.cocktails$ = this.cocktailService.listByFirstLetter('b')
      .pipe(map(result => result.drinks));
  }

}
