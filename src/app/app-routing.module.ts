import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './security/login/login.component';
import { RegisterComponent } from './register/register.component';
import { ExampleComponent } from './example/example.component';
import { NavTesteComponent } from './nav-teste/nav-teste.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './security/auth/auth.guard';

const routes: Routes = [
  // {path: '', component: NavigationComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'example', component: ExampleComponent},
  {path: 'teste', component: NavTesteComponent},
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        canActivateChild: [AuthGuard],
        children: [
          {
            path: 'users',
            loadChildren: () => import('./user/user.module').then(mod => mod.UserModule),
            data: {
              breadcrumb: 'Cadastro de Usuários'
            }
          }
        ]
      }
    ]
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
