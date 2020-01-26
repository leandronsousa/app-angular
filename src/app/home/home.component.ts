import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppService } from '../app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = 'tiss-angular';

  isHandset$: Observable<boolean>;

  constructor(private appService: AppService) {
  }

  ngOnInit(): void {
    this.isHandset$ = this.appService.isHandset();
  }

}
