import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  onSubmit(): void {
    if (this.username === 'Diana' && this.password === '12345678') {
      sessionStorage.setItem('authToken', '123456789');
      sessionStorage.setItem('username', this.username);
      this.authService.login();
      this.router.navigate(['/profile']);
    } else {
      alert('Credenciales incorrectas');
    }
  }
}
