import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import '@cds/core/progress-circle/register.js';
import { Cocktail } from '../cocktail.model';

@Component({
  selector: 'app-cocktail-details',
  templateUrl: './cocktail-details.component.html',
  styleUrls: ['./cocktail-details.component.css']
})
export class CocktailDetailsComponent implements OnInit {
  cocktail: Cocktail;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.data.subscribe((data: { cocktail: Cocktail }) => {
      this.cocktail = data.cocktail;
    });

  }
}
