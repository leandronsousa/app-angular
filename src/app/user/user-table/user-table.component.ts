import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user.model';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements OnInit {

  @Input() users: User[];

  columns: string[] = ['name', 'email', 'acoes'];

  constructor() { }

  ngOnInit() {
  }

  btt(s: string): string {
    return btoa(s);
  }

}
