import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { RootState } from './store';
import { Observable } from 'rxjs';
import { selectAuthToken } from './auth/store';
import { exhaustMap, take } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private store: Store<RootState>) {
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    return this.store.select(selectAuthToken).pipe(
      take(1),
      exhaustMap((token) => {
        if (!token) return next.handle(req);

        let modifiedReq = req.clone({
          setHeaders: {
            'Authorization': token,
          },
        });
        return next.handle(modifiedReq);
      }),
    );
  }
}
