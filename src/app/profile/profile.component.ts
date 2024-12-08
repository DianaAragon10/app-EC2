import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  username: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
    const token = sessionStorage.getItem('authToken');
    if (token) {
      this.username = sessionStorage.getItem('username') || '';
    } else {
      this.router.navigate(['/login']);
    }
  }

  logout(): void {
    sessionStorage.removeItem('authToken');
    sessionStorage.removeItem('username');
    this.router.navigate(['/login']);
  }
}