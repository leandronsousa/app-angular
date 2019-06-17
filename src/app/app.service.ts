import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { TISS_API, authConfig } from './app.api';
import { tap } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { OAuthService } from 'angular-oauth2-oidc';

@Injectable()
export class AppService {

     constructor(private router: Router, private http: HttpClient, private oauthService: OAuthService) {
        //  this.oauthService.loginUrl = authConfig.loginUrl;
        //  this.oauthService.redirectUri = TISS_API
        this.oauthService.tryLogin({});
     }

     obtainAccessToken() {
         this.oauthService.initImplicitFlow();
     }

    // obtainAccessToken(loginData) {
    //     let params = new HttpParams();
    //     params.append('username', loginData.username);
    //     params.append('password', loginData.password);
    //     params.append('grant_type', 'password');
    //     params.append('client_id', 'userClientIdPassword');
    //     let headers = new HttpHeaders({
    //         'Content-type': 'application/x-www-form-url-encoded; charset=utf', 
    //         'Authorization': 'Basic '+btoa("userClientIdPassword:secret")
    //     });
    //     let options = {headers: headers};
        
    //     this.http.post(`${TISS_API}/oauth/token`, params, options)
    //         .pipe(map(res => res))
    //         .subscribe(data => this.saveToken(data), err => alert('invalid cred'));
    // }

    // saveToken(token) {
    //     var expireDate = new Date().getTime() + (1000 * token.expire_in);
    // }
}