import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';
import { UserComponent } from './user.component';

const routes: Routes = [
    {path: '', component: UserComponent},
    {path: 'users', component: UserComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule { }

