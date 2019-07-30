import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './security/login/login.component';
import { RegisterComponent } from './register/register.component';
import { ExampleComponent } from './example/example.component';

const routes: Routes = [
  // {path: '', component: NavigationComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'example', component: ExampleComponent},
  {
    path: 'users',
    loadChildren: () => import('./user/user.module').then(mod => mod.UserModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
