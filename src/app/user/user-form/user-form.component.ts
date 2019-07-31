import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { RegisterComponent } from 'src/app/register/register.component';
import { User } from '../user.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  user: User = new User();

  emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  userForm = this.formBuilder.group({
    name: [null, Validators.compose([Validators.required, Validators.minLength(5)])],
    email: [null, Validators.compose([Validators.required, Validators.pattern(this.emailPattern)])]
  }, {validators: [RegisterComponent.equalsTo], updateOn: 'blur'});

  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.userService.findById(atob(this.route.snapshot.params.id)).subscribe(u => this.user = u);
  }

  onSubmit() {
    this.userService.update(this.user).subscribe();
  }

}
