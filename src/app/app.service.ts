import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { TISS_API, authConfig } from './app.api';
import { tap } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { OAuthService, JwksValidationHandler } from 'angular-oauth2-oidc';
import { Observable } from 'rxjs';

@Injectable()
export class AppService {

    constructor(private router: Router, private http: HttpClient, private oauthService: OAuthService) {
    }
    
    init(): void {
        this.configureWithNewConfigApi();
        this.appToken();
    }

     appToken(): void {
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

     private configureWithNewConfigApi() {
        this.oauthService.configure(authConfig);
        this.oauthService.setStorage(sessionStorage);
        this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    }

}