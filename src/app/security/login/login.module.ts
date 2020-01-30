import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [LoginComponent],
  imports: [SharedModule, RouterModule]
})
export class LoginModule { }
