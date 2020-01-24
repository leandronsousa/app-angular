import { Component, OnInit, Input } from '@angular/core';
import { Operadora } from '../operadora.model';

@Component({
  selector: 'app-operadora-table',
  templateUrl: './operadora-table.component.html',
  styleUrls: ['./operadora-table.component.scss']
})
export class OperadoraTableComponent implements OnInit {

  @Input() operadoras: Operadora[];

  columns: string[] = ['name', 'acoes'];

  constructor() { }

  ngOnInit() {
  }

  btt(s: string): string {
    return btoa(s);
  }

}
