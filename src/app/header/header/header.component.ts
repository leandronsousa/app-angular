import { Component, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Header } from '../header.model';
import { isNullOrUndefined } from 'util';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {

  private static BREADCRUMB = 'breadcrumb';

  breadcrumb: Observable<string>;

  constructor(private router: Router,
              private activatedRoutes: ActivatedRoute,
              private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => this.criarHeader(this.activatedRoutes.root));

  }

  ngAfterViewInit() {
    this.cdr.detectChanges();
  }

  criarHeader(route: ActivatedRoute, path: string = '#', headers: Header[] = []): void {
    const children: ActivatedRoute[] = route.children;

    if (children.length === 0) {
      if (!isNullOrUndefined(headers) && headers.length > 0) {
        this.breadcrumb = of(headers[headers.length - 1].breadcrumb);
      }
      return;
    }

    for (const child of children) {
      const routeUrl: string = child.snapshot.url.map(segment => segment.path).join('/');
      const breadcrumb: string = child.snapshot.data[HeaderComponent.BREADCRUMB];
      if (routeUrl !== '') {
        path += `${routeUrl}`;
      }
      if (!isNullOrUndefined(breadcrumb)) {
        headers.push({ breadcrumb, path });
      }
      this.criarHeader(child, path, headers);
    }
  }

}
