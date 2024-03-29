import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { LoginService } from './login.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  isHandset$: Observable<boolean>;

  emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  formLogin: FormGroup;

  constructor(private loginService: LoginService,
              private formBuilder: FormBuilder,
              private appService: AppService) {
    this.isHandset$ = this.appService.isHandset();
  }

  ngOnInit() {
    this.formLogin = new FormGroup({
      email: this.formBuilder.control('', [Validators.required, Validators.pattern(this.emailPattern)]),
      password: this.formBuilder.control('', [Validators.required, Validators.minLength(6)])
    }, {validators: [], updateOn: 'blur' }
    );
  }

  login() {
    this.loginService.login(this.formLogin.get('email').value, this.formLogin.get('password').value);
  }

}
