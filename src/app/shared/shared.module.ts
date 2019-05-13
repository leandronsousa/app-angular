import { ModuleWithProviders, NgModule } from '@angular/core';
import { LoginService } from '../security/login/login.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from '../security/login/login.component';
import { MaterialModule } from '../material/material.module';
import { RegisterComponent } from '../register/register.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
    declarations: [LoginComponent, RegisterComponent],
    imports: [FormsModule, ReactiveFormsModule, MaterialModule, AppRoutingModule],
    exports: [FormsModule, ReactiveFormsModule, MaterialModule]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [LoginService]
        }
    }
}