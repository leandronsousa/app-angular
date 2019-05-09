import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../navigation.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isHandset$: Observable<boolean>;

  constructor(private navigationService: NavigationService) {}

  ngOnInit() {
    this.isHandset$ = this.navigationService.isHandset();
  }

}
