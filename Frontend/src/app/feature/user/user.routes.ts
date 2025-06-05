import { Routes } from '@angular/router';
import { ApisComponent } from '../../shared/apis/apis.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { CardsComponent } from './cards/cards.component';

export default [
  { path: '', component: ApisComponent },
  { path: 'all', component: AllUsersComponent },
  { path: 'cards', component: CardsComponent },
] as Routes;