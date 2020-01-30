import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { AuthService } from 'src/app/security/auth/auth.service';
import { MessageService } from '../services/message.service';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService,
              private messagemService: MessageService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        this.messagemService.showSuccessMessage(error.statusText);
        if (error.status === 401 && error.error.error === 'invalid_token') {
          this.authService.logout();
        }
        return throwError(error);
      })
    );
  }

}
