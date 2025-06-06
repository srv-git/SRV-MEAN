import { Routes } from '@angular/router';
import { ApisComponent } from '../../shared/apis/apis.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { CardsComponent } from './cards/cards.component';
import { AngularComponent } from './ang-topics/angular.component';

export default [
  { path: '', component: ApisComponent },
  { path: 'all', component: AllUsersComponent },
  { path: 'cards', component: CardsComponent },
  { path: 'topics', component: AngularComponent },
  { path: '**', redirectTo: '' },
] as Routes;