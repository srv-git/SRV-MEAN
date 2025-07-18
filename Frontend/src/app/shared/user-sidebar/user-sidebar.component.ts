import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-user-sidebar',
  imports: [
    MatSidenavModule,
    MatIconModule,
    RouterLink,
    MatListModule,
    MatButtonModule,
    RouterLinkActive,
  ],
  templateUrl: './user-sidebar.component.html',
  styleUrl: './user-sidebar.component.scss',
})
export class UserSidebarComponent {
  navItem: any = [
    { name: 'Apis', path: '/user/' },
    { name: 'Users', path: '/user/all' },
    {
      name: 'Profile',
      path: '/user/' + JSON.parse(localStorage.getItem('user') ?? '').id,
    },
    { name: 'Cards', path: '/user/cards' },
    { name: 'Topics', path: '/user/topics' },
  ];
  constructor(private readonly authService: AuthService) {}

  logout(): void {
    this.authService.logout();
  }
}
