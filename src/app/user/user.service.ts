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
        let params: HttpParams = undefined;
        return this.http.get<User[]>(`${TISS_API}/user/list`, {params: params});
    }

    save(user: User): Observable<User> {
        console.log('entrou2');
        let params = new HttpParams();
        
        const opt =  {
            headers: new HttpHeaders ({
                'Content-type': 'application/json', 
                'Authorization': 'Bearer '+this.loginService.getToken()    
            })
        }

        console.log(this.loginService.getToken());

        // let headers = new HttpHeaders({
        //     'Content-type': 'application/json', 
        //     'Authorization': 'Bearer '+this.loginService.getToken()
        // });
        // let options = {headers: headers};
        
    //     this.http.post(`${TISS_API}/oauth/token`, params, options)
    //         .pipe(map(res => res))
    //         .subscribe(data => this.saveToken(data), err => alert('invalid cred'));
    // }

        let u = new User();

        u.email = 'leandro@hotmail.com';
        u.name = 'leandro';
        u.id = '24';
        u.password = 'asdf';

        // this.http.get('localhost:8080/user/save', options);
        this.http.post(`${TISS_API}/user/save`, u, opt).subscribe(response => console.log(response), err => console.log(err));

        return null;
    }



}