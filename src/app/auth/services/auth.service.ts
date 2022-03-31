import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SignInFormData } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {
  }

  signIn(formData: SignInFormData): Observable<any> {
    return this.http.post(
      'https://bumagi-frontend-test.herokuapp.com/auth',
      formData,
      { observe: 'response' },
    );
  }
}
