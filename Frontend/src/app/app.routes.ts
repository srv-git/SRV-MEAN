import { Routes } from '@angular/router';
import { RegisterComponent } from './feature/auth/register/register.component';
import { LoginComponent } from './feature/auth/login/login.component';
import { AllUsersComponent } from './feature/user/all-users/all-users.component';
import { CardsComponent } from './feature/user/cards/cards.component';
import { ApisComponent } from './components/apis/apis.component';
import { authGuard } from './auth/auth.guard';

export const routes: Routes = [
    {
        path: "",
        component: ApisComponent
    },
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: "register",
        component: RegisterComponent
    },
    {
        path: "users",
        component: AllUsersComponent,
        canActivate: [authGuard]
    },
    {
        path: "cards",
        component: CardsComponent,
        canActivate: [authGuard]
    },
    {
        path: "**",
        redirectTo: ""
    }
];
