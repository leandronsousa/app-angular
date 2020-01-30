import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { UserService } from '../user/user.service';
import { User } from '../user/user.model';
import { Observable } from 'rxjs';
import { AppService } from '../app.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RegisterComponent implements OnInit {

  isHandset$: Observable<boolean>;

  emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  registerForm = this.formBuilder.group({
    name: [null, Validators.compose([Validators.required, Validators.minLength(5)])],
    email: [null, Validators.compose([Validators.required, Validators.pattern(this.emailPattern)])],
    password: [null, Validators.compose([Validators.required, Validators.minLength(6)])],
    confirmPassword: [null, Validators.compose([Validators.required, Validators.minLength(6)])]
  }, {validators: [RegisterComponent.equalsTo], updateOn: 'blur'});

  static equalsTo(group: AbstractControl): {[key: string]: boolean} {
    const pass = group.get('password');
    const conf = group.get('confirmPassword');
    if (!pass || !conf) {
      return undefined;
    }
    if (pass.value !== conf.value) {
      return {passwordNotMatch: true};
    }
    return undefined;
  }

  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private appService: AppService) { }

  ngOnInit() {
    this.isHandset$ = this.appService.isHandset();
  }

  onSubmit(user: User) {
    this.userService.save(user);
  }

}
