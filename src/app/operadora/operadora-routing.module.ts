import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OperadoraListComponent } from './operadora-list/operadora-list.component';

const routes: Routes = [
  {path: 'operadora', component: OperadoraListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OperadoraRoutingModule {

}
