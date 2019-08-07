import { Injectable } from '@angular/core';
import { LoginService } from '../security/login/login.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TISS_API } from '../app.api';
import { Observable } from 'rxjs';

@Injectable()
export class GenericService<T> {

  constructor(private http: HttpClient, private loginService: LoginService) {}

  protected doPost(url: string, model: T) {
    this.http.post<T>(`${TISS_API}${url}`, model, this.getOpt()).subscribe(response => console.log(response), err => console.log(err));
  }

  protected doGet(url: string): Observable<any> {
    return this.http.get<T>(`${TISS_API}${url}`, this.getOpt());
  }

  protected doPatch(url: string, model: T): Observable<any> {
    return this.http.patch<T>(`${TISS_API}${url}`, model, this.getOpt());
  }

  private getOpt(): any {
    const opt =  {
      headers: new HttpHeaders ({
          'Content-type': 'application/json',
          'Authorization': 'Bearer ' + this.loginService.getToken()
      })
    };
    return opt;
  }

}
