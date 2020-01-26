import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Injectable()
export class AppService {

    constructor(
      private breakpointObserver: BreakpointObserver) { }

    isHandset(): Observable<boolean> {
      return this.breakpointObserver.observe(Breakpoints.Handset)
      .pipe(
        map(result => result.matches)
      );
    }

}
