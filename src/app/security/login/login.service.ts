import { Injectable } from '@angular/core';
import { User } from 'src/app/user/user.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { TISS_API } from 'src/app/app.api';
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

    let params = new HttpParams();
    params.append('username','leandro@gmail.com');
    params.append('password','123456');
    params.append('grant_type','password');
    params.append('client_id','app-tiss-pass');

    let headers = new HttpHeaders({
              'Content-type': 'application/x-www-form-url-encoded; charset=utf', 
              'Authorization': 'Basic '+btoa("apptiss123456:secret"),
              'Access-Control-Allow-Origin': 'localhost:4200', 
              'Access-Control-Allow-Methods': 'GET, POST, DELETE, PUT', 
              'Access-Control-Allow-Headers': 'Access-Control-Allow-Origin, Content-Type, Accept, Accept-Language, Origin, User-Agent'
          });
    let options = {headers: headers};
          
    this.http.post(`${TISS_API}/oauth/token`, params, options)
        .pipe(map(res => res))
        .subscribe(data => console.log(data));

    //this.oauthService.initImplicitFlow();
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
