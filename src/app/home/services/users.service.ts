import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(
    private http: HttpClient,
  ) {
  }

  getUsers(status?: number): Observable<any> {
    const params = status !== undefined ? `status=${status}` : '';

    return this.http.get(
      `https://bumagi-frontend-test.herokuapp.com/users?${params}`,
    );
  }
}
