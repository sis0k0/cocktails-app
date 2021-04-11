import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router, UrlTree } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {
  }

  canActivate(): true | UrlTree {
    return this.authenticateOrRedirect();
  }

  canLoad(): true | UrlTree {
    return this.authenticateOrRedirect();
  }

  private authenticateOrRedirect() {
    if (this.authService.isAuthenticated()) {
      return true;
    } else {
      return this.router.parseUrl('/unauthorized');
    }
  }
}
