import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Observable } from 'rxjs/Observable';
import { User } from './modules/user/user.service';
import { fadeAnimation } from './utils/fade-animation';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fadeAnimation]
})
export class AppComponent implements OnInit  {
  isLogged = false;
  loggedUser: User = {
    username: ''
  };
  constructor(
    private auth: AuthService,
  ) {}
  ngOnInit() {
    this.auth.isLogged().subscribe(logged => this.isLogged = logged);
    this.auth.getUserLogged().subscribe(user => this.loggedUser = user);
  }
  getRouteState(outlet: RouterOutlet): string {
    if (outlet.isActivated) {
      return outlet.activatedRoute.snapshot.url as any || 'any';
    }
    return 'none';
  }
}
