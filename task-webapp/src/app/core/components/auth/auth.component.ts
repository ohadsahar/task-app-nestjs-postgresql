import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LoginDialogComponent } from 'src/app/shared/dialogs/login-dialog/login-dialog.component';
import { SignupDialogComponent } from 'src/app/shared/dialogs/signup-dialog/signup-dialog.component';
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  hide: boolean;
  constructor(private authService: AuthService, public dialog: MatDialog) {
    this.hide = true;
  }

  ngOnInit() {
  }

  login() {
    this.dialog.open(LoginDialogComponent);
  }
  signUp() {
    this.dialog.open(SignupDialogComponent);
  }

}
