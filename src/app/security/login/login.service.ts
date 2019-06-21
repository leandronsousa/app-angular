import { Injectable } from '@angular/core';
import { User } from 'src/app/user/user.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { TISS_API, authConfig } from 'src/app/app.api';
import { tap, map } from 'rxjs/operators';
import { OAuthService } from 'angular-oauth2-oidc';
import { URLSearchParams } from 'url';

@Injectable()
export class LoginService {

  constructor(private oauthService: OAuthService, router: Router, private http: HttpClient) {
    
  }

  user: User;

  lastUrl: string;

  public login() {

    // this.oauthService.tokenEndpoint = 'http://localhost:8080/oauth/token';

    //this.oauthService.userinfoEndpoint = 'http://localhost:8080/user/list';

    // this.oauthService.clientId = 'app-tiss-pass';

    // this.oauthService.scope = 'read';

    // this.oauthService.dummyClientSecret = 'apptiss123456';

    this.oauthService.fetchTokenUsingPasswordFlow('leandro@gmail.com', '123456').then((resp) => {
      console.log(resp);
      // Loading data about the user
      // console.log(this.oauthService.loadUserProfile());

    }).then(() => {
      console.log(this.oauthService.getAccessToken());
      console.log(this.oauthService.getRefreshToken());

      // Using the loaded user data
      let claims = this.oauthService.getIdentityClaims();
      if (claims) console.log('given_name', claims);

    })

  }

  public logout() {
    this.oauthService.logOut();
  }

  public get name() {
    let claims = this.oauthService.getIdentityClaims();
    if (!claims) return null;
    return claims;
  }

  public getToken(): string {
    return this.oauthService.getAccessToken();
  }

}
