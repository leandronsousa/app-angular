import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OperadoraListComponent } from './operadora-list/operadora-list.component';
import { OperadoraFormComponent } from './operadora-form/operadora-form.component';

const routes: Routes = [
  {path: '', component: OperadoraListComponent},
  {path: ':id', component: OperadoraFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OperadoraRoutingModule {

}
