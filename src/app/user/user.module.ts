import { NgModule } from '@angular/core';
import { UserComponent } from './user.component';
import { UserListComponent } from './user-list/user-list.component';
import { SharedModule } from '../shared/shared.module';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
    declarations: [UserComponent, UserListComponent],
    imports: [SharedModule, UserRoutingModule]
})
export class UserModule {

}