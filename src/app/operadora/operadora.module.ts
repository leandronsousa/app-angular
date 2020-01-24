import { NgModule } from '@angular/core';
import { OperadoraFormComponent } from './operadora-form/operadora-form.component';
import { OperadoraListComponent } from './operadora-list/operadora-list.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { OperadoraTableComponent } from './operadora-table/operadora-table.component';
import { OperadoraRoutingModule } from './operadora-routing.module';

@NgModule({
  declarations: [OperadoraFormComponent, OperadoraListComponent, OperadoraTableComponent],
  imports: [SharedModule, OperadoraRoutingModule, RouterModule]
})
export class OperadoraModule {

}
