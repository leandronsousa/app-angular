import { Component, OnInit } from '@angular/core';
import { OperadoraService } from '../operadora.service';
import { Observable } from 'rxjs';
import { Operadora } from '../operadora.model';

@Component({
  selector: 'app-operadora-list',
  templateUrl: './operadora-list.component.html',
  styleUrls: ['./operadora-list.component.scss']
})
export class OperadoraListComponent implements OnInit {

  operadoras$: Observable<Operadora[]>;

  constructor(private service: OperadoraService) { }

  ngOnInit() {
    this.operadoras$ = this.service.list();
  }

}
