import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { OAuthService, JwksValidationHandler } from 'angular-oauth2-oidc';
import bcrypt from 'bcryptjs';
import { authConfig } from 'src/app/app.api';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private static CLIENT_ID = 'app-tiss-pass';

  private static CLIENT_SECRET = 'aNWTdoGwBD1evkBIxNl6WdDvFtc0LBV1dxQ-dA_qLhTrJCWzkkerUFy_GwylPCotoqhtBP4AJ1GadQGl';

  redirectUrl: string;

  constructor(
    private oauthService: OAuthService,
    private router: Router
  ) { }

  login(username: string, password: string) {
    this.configureWithNewConfigApi();
    this.oauthService.fetchTokenUsingPasswordFlow(username, password).then(
      (resp) => {
      // Loading data about the user
        // this.oauthService.loadUserProfile();

      this.router.navigate(['/users']);
    }).then(() => {
      // Using the loaded user data
      const claims = this.oauthService.getIdentityClaims();
      if (claims) {
        console.log('given_name', claims);
      }
    }).catch((error) => {
      console.log(error);
    });
  }

  encode(password: string): string {
    console.log(bcrypt.hashSync(password));
    return bcrypt.hashSync(password);
  }

  private configureWithNewConfigApi() {
    this.oauthService.configure(authConfig);
    this.oauthService.setStorage(sessionStorage);
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();
  }

  logout() {
    this.oauthService.logOut();
    this.router.navigate(['/login']);
  }

  get name() {
    let claims = this.oauthService.getIdentityClaims();
    if (!claims) return null;
    return claims;
  }

  getToken(): string {
    return this.oauthService.getAccessToken();
  }

  isLoggedIn(): boolean {
    return this.oauthService.hasValidAccessToken();
  }

  configure() {
    // this.configureWithNewConfigApi();
    // this.oauthService.tokenEndpoint = `${TISS_API}/oauth/token`;
    // this.oauthService.loginUrl = `${TISS_API}/oauth/token`;
    // this.oauthService.userinfoEndpoint = `${TISS_API}/user/list`;
    // this.oauthService.clientId = LoginService.CLIENT_ID;
    // this.oauthService.dummyClientSecret = LoginService.CLIENT_SECRET;
    // this.oauthService.issuer = `${TISS_API}`;
    // this.oauthService.scope = 'read write';
    // this.oauthService.setStorage(sessionStorage);
    // this.oauthService.oidc = false;
    // this.oauthService.responseType = 'token';
    // this.oauthService.strictDiscoveryDocumentValidation = false;
    // this.oauthService.tokenValidationHandler = new JwksValidationHandler();
  }

}
