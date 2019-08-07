import { Injectable } from '@angular/core';
import { User } from './user.model';
import { Observable } from 'rxjs';
import { GenericService } from '../core/generic.service';

@Injectable()
export class UserService extends GenericService<User> {

    list(): Observable<User[]> {
        return super.doGet('/user/list');
    }

    save(user: User): Observable<User> {
        super.doPost('/user/save', user);
        return null;
    }

    findById(id: string): Observable<User> {
      return super.doGet(`/user/${id}`);
    }

    update(user: User): Observable<User> {
      return this.doPatch('/user/update', user);
    }

}
