import { Component } from '@angular/core';
import { Router } from '@angular/router';  // Import Router for navigation

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) { }  // Inject Router

  // Event handler for the username input
  onUsernameInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input) {
      this.username = input.value;
    }
  }

  // Event handler for the password input
  onPasswordInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input) {
      this.password = input.value;
    }
  }

  login() {
    // Here you would typically authenticate the user, but for now,
    // we'll assume the login is successful if the username and password are filled in.
    if (this.username && this.password) {
      console.log('Logging in with', this.username, this.password);

      // Navigate to the home page after a successful login
      this.router.navigate(['/game']);  // Adjust the route if needed
    } else {
      console.log('Please enter both username and password');
    }
  }
}
