import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './security/login/login.component';
import { RegisterComponent } from './register/register.component';
import { ExampleComponent } from './example/example.component';
import { NavTesteComponent } from './nav-teste/nav-teste.component';

const routes: Routes = [
  // {path: '', component: NavigationComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'example', component: ExampleComponent},
  {path: 'teste', component: NavTesteComponent},
  {
    path: 'users',
    loadChildren: () => import('./user/user.module').then(mod => mod.UserModule),
    data: {
      breadcrumb: 'Cadastro de Usuários'
    }
  },
  {
    path: 'spsadt',
    loadChildren: () => import('./tiss/spsadt/spsadt.module').then(mod => mod.SpsadtModule),
    data: {
      breadcrumb: 'Cadastro de Guias de SP/SADT'
    }
  },
  {
    path: 'operadora',
    loadChildren: () => import('./operadora/operadora.module').then(mod => mod.OperadoraModule),
    data: {
      breadcrumb: 'Cadastro de Operadoras'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
