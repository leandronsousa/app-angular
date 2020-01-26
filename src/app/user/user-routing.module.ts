import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { AuthGuard } from '../security/auth/auth.guard';

const routes: Routes = [
    {
      path: '',
      component: UserListComponent,
      canActivate: [AuthGuard],
      children: [
        {
          path: '',
          canActivateChild: [AuthGuard],
          children: [
            {
              path: ':id',
              component: UserFormComponent
            }
          ]
        }
      ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule { }

