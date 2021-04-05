import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { CocktailService } from '../cocktail.service';
import '@cds/core/progress-circle/register.js';

@Component({
  selector: 'app-cocktail-details',
  templateUrl: './cocktail-details.component.html',
  styleUrls: ['./cocktail-details.component.css']
})
export class CocktailDetailsComponent implements OnInit {
  cocktail$: Observable<any>;

  constructor(
    private route: ActivatedRoute,
    private cocktailService: CocktailService
  ) { }

  ngOnInit(): void {
    this.cocktail$ = this.route.paramMap.pipe(
      switchMap(paramsMap => {
        const id = paramsMap.get('id');
        return this.cocktailService.getById(id);
      })
    );

  }
}
