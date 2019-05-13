import { Injectable } from '@angular/core';
import { User } from 'src/app/user/user.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { TISS_API } from 'src/app/app.api';
import { tap } from 'rxjs/operators';
import { OAuthService } from 'angular-oauth2-oidc';

@Injectable()
export class LoginService {

  constructor(private oauthService: OAuthService) { }

  user: User;

  lastUrl: string;

  public login() {
    this.oauthService.initImplicitFlow();
  }

  public logout() {
    this.oauthService.logOut();
  }

  public get name() {
    let claims = this.oauthService.getIdentityClaims();
    if (!claims) return null;
    return claims;
  }

}
