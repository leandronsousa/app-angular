import { Injectable } from '@angular/core';
import { User } from 'src/app/user/user.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { TISS_API } from 'src/app/app.api';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoginService {

  constructor(private http: HttpClient, private router: Router) { }

  user: User;

  lastUrl: string;

  isLoggendIn(): boolean {
    return false;
  }

  login(email: string, password: string) : Observable<User> {
    return this.http.post<User>(`${TISS_API}/login`, {email: email, password: password}).pipe(tap(user => this.user = user));
  }

}
