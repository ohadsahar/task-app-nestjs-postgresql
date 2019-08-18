import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  hide: boolean;
  constructor(private authService: AuthService) {
    this.hide = true;
  }

  ngOnInit() {
  }

  signUp(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.authService.signUp(form.value).subscribe(response => {
      console.log(response);
    });
  }

}
