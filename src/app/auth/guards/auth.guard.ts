import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
  ) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const authToken: string | null = localStorage.getItem('authToken');

    if (state.url.includes('auth')) {
      if (!authToken) return true;
      this.router.navigateByUrl('/');
      return false;
    } else {
      if (authToken) return true;
      this.router.navigateByUrl('/auth');
      return false;
    }
  }
}
