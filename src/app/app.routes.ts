import { Route } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuardService } from './services/auth-guard.service';
import { LoginComponent } from './components/login/login.component';

export const ROOT_ROUTES: Route[] = [
    {
      
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        pathMatch: 'full',
        component: LoginComponent
    }
]