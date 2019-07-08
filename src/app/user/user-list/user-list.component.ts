import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, AfterViewInit {

  users: User[];

  columns: string[] = ['name', 'email', 'acoes'];

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  btt(s: string): string {
    return btoa(s);
  }

  ngAfterViewInit() {
    this.userService.list().subscribe(list => this.users = list);
  }

}
