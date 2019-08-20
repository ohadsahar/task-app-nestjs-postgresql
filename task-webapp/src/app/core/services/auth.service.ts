import { MatDialog } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthModel } from './../../shared/models/auth.model';
import { Router } from '@angular/router';

const backendUrl = environment.backendUrlAuth;
@Injectable({ providedIn: 'root' })
export class AuthService {

  private authStatusListener = new BehaviorSubject<boolean>(false);
  private usernameListener = new BehaviorSubject<string>('');
  constructor(private http: HttpClient, private router: Router, private dialog: MatDialog) { }

  signUp(authData: AuthModel) {
    return this.http.post<{ message: any, success: boolean }>(`${backendUrl}/signup`, authData);
  }
  signIn(authData: AuthModel) {
    this.http.post<{ message: any }>(`${backendUrl}/login`, authData).subscribe(response => {
      if (response.message) {
        localStorage.setItem('token', response.message);
        this.authStatusListener.next(true);
        this.usernameListener.next(authData.username);
        this.dialog.closeAll();
      }
    });
  }
  getAuthData() {
    const token = localStorage.getItem('token');
    if (!token) {
      return;
    }
    return token;
  }
  autoAuthUser() {
    const token = this.getAuthData();
    if (token) {
      this.authStatusListener.next(true);
    }
  }
  logout() {
    localStorage.removeItem('token');
    this.authStatusListener.next(false);
    this.dialog.closeAll();
    this.router.navigate(['']);
  }
  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }
}
