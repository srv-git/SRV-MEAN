import { Routes } from '@angular/router';
import { authGuard } from './auth/auth.guard';
import { DefaultLayoutComponent } from './layout/default-layout/default-layout.component';
import { UserLayoutComponent } from './layout/user-layout/user-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: DefaultLayoutComponent,
    loadChildren: () => import('./feature/auth/auth.routes').then(m=>m.default)
  },
  {
    path: 'user',
    component: UserLayoutComponent,
    loadChildren: () => import('./feature/user/user.routes').then(m=>m.default),
    canActivate: [authGuard],
  },
  {
    path: '**',
    redirectTo: '',
  },
];
