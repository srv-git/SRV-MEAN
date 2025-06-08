import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserHeaderComponent } from '../../shared/user-header/user-header.component';
import { UserFooterComponent } from '../../shared/user-footer/user-footer.component';
import { UserSidebarComponent } from '../../shared/user-sidebar/user-sidebar.component';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-layout',
  imports: [
    RouterOutlet,
    UserHeaderComponent,
    UserFooterComponent,
    UserSidebarComponent,
    MatSidenavModule,
    CommonModule,
  ],
  templateUrl: './user-layout.component.html',
  styleUrl: './user-layout.component.scss',
})
export class UserLayoutComponent {
  @ViewChild('toggleSidebar') toggleSidebar!: MatSidenav;
  isSidenavOpen: boolean = true;

  handleSidebar(): void {
    this.isSidenavOpen = !this.isSidenavOpen;
    this.toggleSidebar.toggle();
  }
}
