import { Route } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuardService } from './services/auth-guard.service';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';

export const ROOT_ROUTES: Route[] = [
    {
      path: '',
      canActivate: [AuthGuardService],
      pathMatch: 'full',
      component: AppComponent
    },
    {
        path: 'login',
        pathMatch: 'full',
        component: LoginComponent
    },
    {
      path: 'home',
      canActivate: [AuthGuardService],
      pathMatch: 'full',
      component: HomeComponent
    }
]