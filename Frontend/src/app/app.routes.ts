import { Routes } from '@angular/router';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { AllUsersComponent } from './user/all-users/all-users.component';
import { CardsComponent } from './user/cards/cards.component';
import { ApisComponent } from './components/apis/apis.component';

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
        component: AllUsersComponent
    },
    {
        path: "cards",
        component: CardsComponent
    },
    // {
    //     path: "**",
    //     redirectTo: ""
    // }
];
