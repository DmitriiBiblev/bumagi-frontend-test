import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserForm } from '../interfaces/user-form.interface';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {
  }

  getUsers(status: number | null): Observable<any> {
    const params = status !== null ? `status=${status}` : '';

    return this.http.get(`https://bumagi-frontend-test.herokuapp.com/users?${params}`);
  }

  saveUser(userForm: UserForm): Observable<any> {
    const { id, ...userData } = userForm;

    return this.http.patch(`https://bumagi-frontend-test.herokuapp.com/users/${id}`, userData);
  }
}
