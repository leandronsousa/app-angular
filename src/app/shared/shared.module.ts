import { ModuleWithProviders, NgModule } from '@angular/core';
import { LoginService } from '../security/login/login.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from '../security/login/login.component';
import { MaterialModule } from '../material/material.module';
import { RegisterComponent } from '../register/register.component';
import { CommonModule } from '@angular/common';
import { UserService } from '../user/user.service';
import { AppService } from '../app.service';
import { ExampleComponent } from '../example/example.component';
import { SpsadtService } from '../tiss/spsadt/spsadt.service';

@NgModule({
    declarations: [LoginComponent, RegisterComponent, ExampleComponent],
    imports: [FormsModule, ReactiveFormsModule, MaterialModule, CommonModule],
    exports: [FormsModule, ReactiveFormsModule, MaterialModule, CommonModule]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [LoginService, UserService, SpsadtService, AppService]
        };
    }
}
