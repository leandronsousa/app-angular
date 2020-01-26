import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class LoginService  {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  login(username: string, password: string) {
    this.authService.login(username, password);
  }

}
