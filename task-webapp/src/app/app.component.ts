import { Component, OnInit } from '@angular/core';
import { AuthService } from './core/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isLogged: boolean;
  constructor(private authService: AuthService) {
    this.isLogged = false;
  }
  title = 'Task management';

  ngOnInit() {
    this.authService.autoAuthUser();
    this.authService.getAuthStatusListener().subscribe(response => {
      this.isLogged = response;
    });
  }
}
