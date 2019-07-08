import { Component, OnInit } from '@angular/core';
import { OAuthService, JwksValidationHandler } from 'angular-oauth2-oidc';
import { authConfig } from './app.api';
import { AppService } from './app.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'tiss-angular';

  isHandset$: Observable<boolean>;

  constructor(private appService: AppService) {
  }

  ngOnInit(): void {
    this.isHandset$ = this.appService.isHandset();
    this.appService.init();
  }

}
