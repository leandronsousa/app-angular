import { Component, OnInit } from '@angular/core';
import { User } from './user.model';
import { UserService } from './user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  users$: Observable<User[]>;

  constructor(private userService: UserService) { }

  ngOnInit() {
    
  }

}
