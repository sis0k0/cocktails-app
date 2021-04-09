import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cocktails-app';
  loggedIn: boolean;

  constructor(private authService: AuthService) {
    this.loggedIn = this.authService.isAuthenticated();
  }

  logIn() {
    this.authService.logIn();
    this.loggedIn = true;
  }

  logOut() {
    this.authService.logOut();
    this.loggedIn = false;
  }
}
