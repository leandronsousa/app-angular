import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NavigationService } from '../navigation.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  isHandset$: Observable<boolean>;

  constructor(private navigationService: NavigationService) {}

  ngOnInit() {
    this.isHandset$ = this.navigationService.isHandset();
  }
}
