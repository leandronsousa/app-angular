import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppService } from '../app.service';
import { AuthService } from '../security/auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = 'app-angular';

  isHandset$: Observable<boolean>;

  constructor(private appService: AppService,
              private authService: AuthService) {
  }

  ngOnInit(): void {
    this.isHandset$ = this.appService.isHandset();
  }

  logout() {
    if (confirm('Fazer logout?')) {
      this.authService.logout();
    }
  }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }

}
