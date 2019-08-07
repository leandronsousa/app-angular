import { Routes, RouterModule } from '@angular/router';
import { SpsadtNewComponent } from './spsadt-new/spsadt-new.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  // {path: '', component: UserListComponent},
  {path: 'new', component: SpsadtNewComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpsadtRoutingModule {

}
