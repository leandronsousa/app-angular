import { NgModule } from '@angular/core';
import { SpsadtNewComponent } from './spsadt-new/spsadt-new.component';
import { SpsadtRoutingModule } from './spsadt-routing.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { SpsadtFormComponent } from './spsadt-form/spsadt-form.component';

@NgModule({
  declarations: [SpsadtNewComponent, SpsadtFormComponent],
  imports: [SharedModule, SpsadtRoutingModule, RouterModule]
})
export class SpsadtModule {

}
