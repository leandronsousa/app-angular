import { Injectable } from '@angular/core';
import { GenericService } from 'src/app/core/services/generic.service';
import { Spsadt } from './spsadt.model';
import { Observable } from 'rxjs';

@Injectable()
export class SpsadtService extends GenericService<Spsadt> {

  list(): Observable<Spsadt[]> {
    return super.doGet('/user/list');
  }

  save(spsadt: Spsadt): Observable<Spsadt> {
      super.doPost('/user/save', spsadt);
      return null;
  }

  findById(id: string): Observable<Spsadt> {
    return super.doGet(`/user/${id}`);
  }

  update(spsadt: Spsadt): Observable<Spsadt> {
    return this.doPatch('/user/update', spsadt);
  }

}
