import { NgForm } from '@angular/forms';

import { Component, ViewEncapsulation } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-dialog-login',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class LoginDialogComponent {

  hide: boolean;
  constructor(private authService: AuthService) {
    this.hide = true;
  }

  login(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.authService.signIn(form.value);
  }
}
