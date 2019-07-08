import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { UserComponent } from './user.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';

const routes: Routes = [
    {path: '', component: UserListComponent},
    {path: 'users', component: UserListComponent},
    {path: 'user/:id', component: UserFormComponent},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: []
})
export class UserRoutingModule { }
