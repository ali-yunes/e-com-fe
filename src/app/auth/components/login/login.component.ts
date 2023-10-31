import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})

export class LoginComponent {
  hide: boolean = true;
  username: string;
  password: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar) {}

  onLogin(): void {
    this.authService.authenticate(this.username, this.password).subscribe({
      next: response => {
        // Handle successful login
        this.snackBar.open(response.message,'',{duration:2000});
        this.authService.login(); //Update login state
        this.router.navigate(['/home']);
      },
      error: error => {
        // Handle login error
        this.snackBar.open(error.error.message,'',{duration:2000});
      }
    });
  }
}
