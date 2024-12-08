import { Routes } from '@angular/router';
import { PruebaPipeComponent } from './prueba-pipe/prueba-pipe.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'profile', component: ProfileComponent, canActivate: [authGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'prueba_pipe', component: PruebaPipeComponent }
];
