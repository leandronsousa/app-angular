import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Header } from '../header.model';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  private static BREADCRUMB = 'breadcrumb';

  headers: Header[];

  constructor(private router: Router, private activatedRoutes: ActivatedRoute) { }

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => this.headers = this.criarHeader(this.activatedRoutes.root));
  }

  criarHeader(route: ActivatedRoute, path: string = '#', headers: Header[] = []): Header[] {
    const children: ActivatedRoute[] = route.children;

    if (children.length === 0) {
      return headers;
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
      return this.criarHeader(child, path, headers);
    }
  }

}
