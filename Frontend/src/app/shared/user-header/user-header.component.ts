import { Component, EventEmitter, Output } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { User } from '../../models/user.model';
import { CapitalizePipe } from '../../core/pipe/capitalize.pipe';

@Component({
  selector: 'app-user-header',
  imports: [
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    RouterLink,
    CapitalizePipe,
  ],
  templateUrl: './user-header.component.html',
  styleUrl: './user-header.component.scss',
})
export class UserHeaderComponent {
  user: User = JSON.parse(localStorage.getItem('user') ?? '');
  @Output() menuClick = new EventEmitter<void>();
}
