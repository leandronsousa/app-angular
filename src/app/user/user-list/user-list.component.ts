import { Component, OnInit, ViewChild, TemplateRef, ViewContainerRef, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { User } from '../user.model';
import { UserService } from '../user.service';
import { Observable } from 'rxjs';
import { TemplatePortal, Portal, ComponentPortal } from '@angular/cdk/portal';
import { HeaderComponent } from 'src/app/header/header/header.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, AfterViewInit {

  users$: Observable<User[]>;

  @ViewChild('templateHeaderContent', {static: false}) templateHeaderContent: TemplateRef<HeaderComponent>;
  selectedHeader: Portal<HeaderComponent>;
  componentHeader: ComponentPortal<HeaderComponent>;
  templateHeader: TemplatePortal<HeaderComponent>;

  constructor(private userService: UserService,
              private _viewContainerRef: ViewContainerRef,
              private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.users$ = this.userService.list();

  }

  ngAfterViewInit() {
    this.templateHeader = new TemplatePortal(this.templateHeaderContent, this._viewContainerRef);
    this.componentHeader = new ComponentPortal(HeaderComponent);
    this.cdr.detectChanges();
  }

}
