import { Component } from '@angular/core';
import { Router } from '@angular/router';  
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) { }

  onUsernameInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input) {
      this.username = input.value;
    }
  }

  onPasswordInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input) {
      this.password = input.value;
    }
  }

  login() {
    if (this.username && this.password) {
      console.log('Logging in with', this.username, this.password);

      this.router.navigate(['/game']);
      console.log('Please enter both username and password');
    }
  }
}
