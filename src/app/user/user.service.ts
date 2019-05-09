import { Injectable } from '@angular/core';
import { User } from './user.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { TISS_API } from '../app.api';

@Injectable()
export class UserService {

    constructor(private http: HttpClient) {}

    list(): Observable<User[]> {
        let params: HttpParams = undefined;
        return this.http.get<User[]>(`${TISS_API}/user/list`, {params: params});
    }

}