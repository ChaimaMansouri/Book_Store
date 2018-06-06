import { SignModule } from './sign/sign.module';
import { ContainerComponent } from './sign/container/container.component';
import { SignComponent } from './sign/sign.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { AuthGuard } from './_guards/index';
import { BookComponent } from './sign/book/book.component';

const appRoutes: Routes = [
  //  { path: '', component: HomeComponent },
   { path: 'home', loadChildren : './sign/sign.module#SignModule', canActivate: [AuthGuard]}, 
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: 'home/container' }
];

export const routing = RouterModule.forRoot(appRoutes);