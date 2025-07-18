import { Routes } from '@angular/router';
import { authGuard } from './auth/auth.guard';
import { DefaultLayoutComponent } from './layout/default-layout/default-layout.component';
import { UserLayoutComponent } from './layout/user-layout/user-layout.component';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./feature/default/front.routes').then((m) => m.default),
  },
  {
    path: 'auth',
    component: DefaultLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./feature/auth/auth.routes').then((m) => m.default),
      },
    ],
  },
  {
    path: 'user',
    component: UserLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./feature/user/user.routes').then((m) => m.default),
      },
    ],
    canActivate: [authGuard],
  },
  {
    path: '**',
    redirectTo: '',
  },
];
