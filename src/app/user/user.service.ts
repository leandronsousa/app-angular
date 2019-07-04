import { Injectable } from '@angular/core';
import { User } from './user.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { TISS_API } from '../app.api';
import { map, tap } from 'rxjs/operators';
import { LoginService } from '../security/login/login.service';

@Injectable()
export class UserService {

    constructor(private http: HttpClient, private loginService: LoginService) {}

    list(): Observable<User[]> {
        const opt =  {
            headers: new HttpHeaders ({
                'Content-type': 'application/json', 
                'Authorization': 'Bearer '+this.loginService.getToken()    
            })
        }
        return this.http.get<User[]>(`${TISS_API}/user/list`, opt);
    }

    save(user: User): Observable<User> {
        let params = new HttpParams();
        const opt =  {
            headers: new HttpHeaders ({
                'Content-type': 'application/json', 
                'Authorization': 'Bearer '+this.loginService.getToken()    
            })
        }

        this.http.post(`${TISS_API}/user/save`, user, opt).subscribe(response => console.log(response), err => console.log(err));

        return null;
    }



}