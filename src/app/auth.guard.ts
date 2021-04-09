import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {
  }

  canActivate(): true | UrlTree {
    if (this.authService.isAuthenticated()) {
      return true;
    } else {
      return this.router.parseUrl('/unauthorized');
    }
  }
  
}
