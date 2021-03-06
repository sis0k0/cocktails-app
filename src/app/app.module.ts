import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CocktailsListComponent } from './cocktails-list/cocktails-list.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { CocktailDetailsComponent } from './cocktail-details/cocktail-details.component';
import { CocktailDetailsResolver } from './cocktail-details.resolver';
import { AuthGuard } from './auth.guard';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { UsersComponent } from './admin/users/users.component';

const routes: Routes = [
  {
    path: 'list',
    component: CocktailsListComponent
  },
  {
    path: 'cocktail/:id',
    component: CocktailDetailsComponent,
    canActivate: [
      AuthGuard
    ],
    resolve: {
      cocktail: CocktailDetailsResolver
    }
  },
  {
    path: 'unauthorized',
    component: UnauthorizedComponent
  },
  {
    path: 'admin', 
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    canLoad: [
      AuthGuard
    ]
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'list'
  },
  {
    path: '**',
    component: NotFoundPageComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    CocktailsListComponent,
    NotFoundPageComponent,
    CocktailDetailsComponent,
    UnauthorizedComponent,
  ],
  imports: [
    BrowserModule,
    ClarityModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
