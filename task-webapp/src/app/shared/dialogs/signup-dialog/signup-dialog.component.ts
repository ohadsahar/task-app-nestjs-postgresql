import { AuthService } from './../../../core/services/auth.service';
import { NgForm } from '@angular/forms';
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-signup-dialog',
  templateUrl: './signup-dialog.component.html',
  styleUrls: ['./signup-dialog.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SignupDialogComponent {
  hide: boolean;
  alreadyExists: string;

  constructor(private authService: AuthService) {
    this.hide = true;
  }
  signUp(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.authService.signUp(form.value).subscribe(response => {
      if (!response.success) {
        this.alreadyExists = response.message.message.message;
      } else {
        this.alreadyExists = '';
        this.authService.signIn(form.value);
      }
    }, (error) => {
      console.log(error);
    });
  }

}
