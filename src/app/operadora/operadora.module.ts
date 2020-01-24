import { NgModule } from '@angular/core';
import { OperadoraFormComponent } from './operadora-form/operadora-form.component';
import { OperadoraListComponent } from './operadora-list/operadora-list.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { OperadoraTableComponent } from './operadora-table/operadora-table.component';

@NgModule({
  declarations: [OperadoraFormComponent,
                OperadoraListComponent,
                OperadoraTableComponent],
  imports: [SharedModule, RouterModule]
})
export class OperadoraModule {

}
