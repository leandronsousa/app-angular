import { NgModule } from '@angular/core';
import { UserComponent } from './user.component';
import { UserListComponent } from './user-list/user-list.component';
import { SharedModule } from '../shared/shared.module';
import { UserRoutingModule } from './user-routing.module';
import { UserFormComponent } from './user-form/user-form.component';
import { RouterModule } from '@angular/router';
import { UserTableComponent } from './user-table/user-table.component';

@NgModule({
    declarations: [UserComponent, UserListComponent, UserFormComponent, UserTableComponent],
    imports: [SharedModule, UserRoutingModule, RouterModule]
})
export class UserModule {

}
