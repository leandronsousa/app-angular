import { ModuleWithProviders, NgModule } from '@angular/core';
import { LoginService } from '../security/login/login.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { RegisterComponent } from '../register/register.component';
import { CommonModule } from '@angular/common';
import { UserService } from '../user/user.service';
import { AppService } from '../app.service';
import { ExampleComponent } from '../example/example.component';
import { RouterModule } from '@angular/router';
import { PortalModule } from '@angular/cdk/portal';

@NgModule({
    declarations: [RegisterComponent, ExampleComponent],
    imports: [FormsModule, ReactiveFormsModule, MaterialModule, CommonModule, RouterModule, PortalModule],
    exports: [FormsModule, ReactiveFormsModule, MaterialModule, CommonModule, PortalModule]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [LoginService, UserService, AppService]
        };
    }
}
