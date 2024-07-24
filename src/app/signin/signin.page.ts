import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class LoginPage {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService) {

  }

  login() {
    this.authService.login(this.email, this.password);
  }
}
