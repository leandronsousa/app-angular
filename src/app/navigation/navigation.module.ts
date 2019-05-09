import { NgModule, ModuleWithProviders } from '@angular/core';
import { NavigationComponent } from './navigation.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CommonModule } from '@angular/common';
import { NavigationService } from './navigation.service';
import { MaterialModule } from '../material/material.module';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
]

@NgModule({
    declarations: [NavigationComponent, HeaderComponent, FooterComponent, MenuComponent],
    imports: [CommonModule, MaterialModule, RouterModule.forChild(routes)],
    exports: [CommonModule, NavigationComponent]
})
export class NavigationModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: NavigationModule,
            providers: [
                NavigationService
            ]
        }
    }
}