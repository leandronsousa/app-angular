import { Injectable } from '@angular/core';
import { GenericService } from '../core/generic.service';
import { Operadora } from './operadora.model';
import { Observable } from 'rxjs';

@Injectable()
export class OperadoraService extends GenericService<Operadora> {

  list(): Observable<Operadora[]> {
    return super.doGet('/operadora');
  }

  save(operadora: Operadora): Observable<Operadora> {
    super.doPost('/operadora', operadora);
    return null;
  }

  findById(id: string): Observable<Operadora> {
    return super.doGet(`/operadora/${id}`);
  }

  update(operadora: Operadora): Observable<Operadora> {
   return this.doPatch('/operadora', operadora);
  }

}
