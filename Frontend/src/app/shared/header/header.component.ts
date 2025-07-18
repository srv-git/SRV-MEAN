import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
@Component({
  selector: 'app-header',
  imports: [
    MatButtonModule,
    MatChipsModule,
    MatIconModule,
    MatToolbarModule,
    RouterLink,
    MatSidenavModule,
    RouterLinkActive,
    MatMenuModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  //TODO: make it dynamic
  // defaultMenu = [
  //   {
  //     left: true,
  //     name: 'About',
  //     path: '/about',
  //     subMenu: [],
  //   },
  //   {
  //     left: true,
  //     name: 'Expertise',
  //     path: '/expertise',
  //     subMenu: [
  //       {
  //         name: 'Expertise',
  //         path: '/expertise',
  //       },
  //     ],
  //   },
  // ];
}
