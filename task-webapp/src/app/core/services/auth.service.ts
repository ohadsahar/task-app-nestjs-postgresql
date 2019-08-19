import { AuthModel } from './../../shared/models/auth.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { environment } from 'src/environments/environment';

const backendUrl = environment.backendUrlAuth;
@Injectable({ providedIn: 'root' })
export class AuthService {

  constructor(private http: HttpClient) { }

  signUp(authData: AuthModel) {
    return this.http.post<{ message: any }>(`${backendUrl}/signup`, authData);
  }

  signIn(authData: AuthModel) {
    this.http.post<{message: any}>(`${backendUrl}/login`, authData).subscribe(response => {
      localStorage.setItem('token', response.message);
    });
  }

  logout() {
    localStorage.removeItem('token');
  }

}
